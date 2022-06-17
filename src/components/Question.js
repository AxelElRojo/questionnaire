import React from "react";
import PropTypes from 'prop-types';

function checkAnswer(i, answers, setAnswers, answer, correct, type){
	var answersCopy = answers;
	if(type === "open"){
		answersCopy[i] = answer.toLowerCase().includes(correct.toLowerCase());
	}else
		answersCopy[i] = correct === answer;
	setAnswers(answersCopy);
}

export const Question = ({title, type, correct, options, i, answers, setAnswers, lang}) => {
	var opts = [];
	if(type === "radio")
		for(let i=0; i<options.length; ++i)
			opts.push(<option value={options[i]} key={`opt_${i}`}>{options[i]}</option>)
	return (
		<div className="form-group mb-3">
			<label htmlFor={i} className="form-label text-left">{i+1}. {title}:</label>
			{type === "open" &&
				<input
					id={i}
					type="text"
					className="form-control"
					placeholder={lang === "es" ? "Escribe tu respuesta" : "Write your answer"}
					required
					onChange={(event) => checkAnswer(i, answers, setAnswers, event.target.value, correct, type)}
				/>
			}
			{type === "radio" &&
				<select
					id={i}
					className="form-select"
					required
					onChange={(event) => checkAnswer(i, answers, setAnswers, event.target.value, correct, type)}
				>
					<option selected disabled>{lang === "es" ? "Selecciona una opción" : "Select an option"}</option>
					{opts}
				</select>
			}
			<hr/>
		</div>
	);
}

Question.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	correct: PropTypes.string,
	options: PropTypes.array,
	i: PropTypes.number,
	answers: PropTypes.array,
	setAnswers: PropTypes.func
};