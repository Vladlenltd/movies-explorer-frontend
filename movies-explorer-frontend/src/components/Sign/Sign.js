/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

function EnteryForm({
	title, children, buttonText, buttonDisable, questionTitle, bottomLink, bottomLinkText, formType, onClick,
}) {
	return (
		<form className={`form ${formType}-form`}>
			<div className={`${formType}-form__container`}>
				<div className={`form ${formType}-form__title-container`}>
					{(formType === 'sign') && <Logo />}
					<h2 className={`${formType}-form__title`}>{title}</h2>
				</div>
				{children}
			</div>
			<div className={`${formType}-form__container_bottom`}>
				<Button
					text={buttonText}
					type={`${formType}-form-submit`}
					onClick={onClick}
					buttonDisabled={buttonDisable}
				/>
				{formType === 'sign'
					&& (
						<div className="sign-form__link-block">
							<p className="sign__question">{questionTitle}</p>
							<Link to={bottomLink} className="sign__link">{bottomLinkText}</Link>
						</div>
					)}
				{formType === 'profile'
					&& (
						<Link to={bottomLink} className="profile__link">{bottomLinkText}</Link>
					)}
			</div>
		</form>
	);
}

export default EnteryForm;
