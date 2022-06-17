import React from "react";
import PropTypes from 'prop-types';

export const ApproveMsg = ({score, total, lang}) => {
	return (
		<div className={(score > total/2 ? "alert alert-primary" : "alert alert-danger") + " w-50 mt-5 mx-auto"} role="alert">
			<h4 class="mb-3 alert-heading">{score/total >= .6 ? "¡Bien hecho!" : "Oh, no"}</h4>
			{lang === 'es' ? "Tienes " : "You scored "} {score}/{total}
			{lang === 'es' ? " aciertos, es decir, " : ", meaning, "} {Math.round(score/total*100)}%.
			{score < total &&
				<div>
					<hr/>
					<button
						className="btn btn-secondary btn-sm"
						onClick={() => window.location.reload(false)}>
							{lang === 'es' ? "Reintentar" : "Retry"}
					</button>
				</div>
			}
		</div>
	);
}

ApproveMsg.propTypes = {
	score: PropTypes.number,
	total: PropTypes.number
};