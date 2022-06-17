import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Question } from "./Question";
import { ApproveMsg } from "./ApproveMsg";
import { ErrorMsg } from "./ErrorMsg";

function evalHandler(answers, setRes){
	let cnt = 0;
	for(let i=0; i<answers.length; ++i){
		if(answers[i])
			++cnt;
	}
	setRes(cnt);
}

export const Questionnaire = ({url}) => {
	const [questions, setQuestions] = useState([]);
	const [error, setError] = useState(false);
	const [ready, setReady] = useState(false);
	const [title, setTitle] = useState("");
	const [res, setRes] = useState(false);
	const [answers, setAnswers] = useState([]);
	const [lang, setLang] = useState("en");
	if(!ready){
		fetch(url)
		.then(res => res.json())
		.then((response) => {
			setReady(true);
			setTitle(response.title);
			setLang(response.lang);
			document.title = response.title;
			var questions = [], corrects = [];
			for(let i=0; i<response.questions.length; ++i){
				corrects.push(false);
				questions.push(<Question
						title={response.questions[i].title}
						lang={lang}
						type={response.questions[i].type}
						options={response.questions[i].options}
						correct={response.questions[i].correct}
						key={i}
						i={i}
						answers={answers}
						setAnswers={setAnswers}
					/>
				);
			}
			setAnswers(corrects);
			setQuestions(questions);
		}, (response) => {
			setError(true);
			console.log(response);
		});
	}
	return (
		<div className="container">
			<div className="container">
				<h1 className="mb-5 text-center">
					{ready && res === false && title}
				</h1>
				{res === false && ready &&
					<form onSubmit={(e) => e.preventDefault()} className="text-center">
						{questions}
						<button className="btn btn-primary mt-5" onClick={() => evalHandler(answers, setRes)}>
							{lang === 'es' ? "Evaluar" : "Evaluate"}
						</button>
					</form>
				}
			</div>
			{res !== false && <ApproveMsg lang={lang} score={res} total={questions.length}/>}
			{error !== false && <ErrorMsg lang={lang}/>}
		</div>
	);
}
Questionnaire.propTypes = {
	url: PropTypes.string
};