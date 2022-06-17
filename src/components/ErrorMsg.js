import React from "react";

export const ErrorMsg = ({lang}) => {
	return (
		<div className="alert alert-danger w-50 mt-5 mx-auto" role="alert">
			<h4 className="mb-3 alert-heading">
				{lang === 'es' ? "Error detectado " : "Error detected "} :)
			</h4>
			<hr/>
			{lang === 'es' ? "Posibles razones:" : "Possible reasons:"}
			<ul>
				{lang === 'es' ? <li>No tienes conexión a internet.</li> : <li>You have no internet connection.</li>}
				{lang === 'es' ? <li>El cuestionario no está disponible.</li> : <li>The questionnaire isn't available.</li>}
				{lang === 'es' ? <li>El código no vincula a un formulario válido.</li> : <li>The code is invalid.</li>}
			</ul>
		</div>
	);
}