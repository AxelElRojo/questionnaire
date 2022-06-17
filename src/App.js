import { Questionnaire } from "./components/Questionnaire"

function App() {
	const queryParams = new URLSearchParams(window.location.search);
	const url = window.atob(queryParams.get('url'));
	return (
		<div className="container d-flex justify-content-center">
			{window.location.search && <Questionnaire url={url}/>}
			{!window.location.search &&
				<div className="alert alert-danger mt-5 w-75" role="alert">
					<h4 className="mb-3 alert-heading">Error</h4>
					<hr/>
					Missing code
					<br/>
					Código faltante
				</div>
			}
		</div>
	);
}

export default App;