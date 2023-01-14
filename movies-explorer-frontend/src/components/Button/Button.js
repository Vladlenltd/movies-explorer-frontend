/* eslint-disable react/prop-types */

function Button({ type, text, onClick, buttonDisabled }) {
	return (
		<button disabled={buttonDisabled} type="button" className={`button button_type_${type}`} onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;
