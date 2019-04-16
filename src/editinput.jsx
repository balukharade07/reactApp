import React, { Component } from "react";

export default class editinput extends Component {
	render() {
		const { formElements, onChange } = this.props;

		return (
			<React.Fragment>
				{formElements &&
					formElements.map((value, index) => (
						<div className="form-group" key={index}>
							<label>{value.label}</label>
							<input
								type={value.type}
								autoComplete={value.autoComplete}
								className={value.class}
								placeholder={value.placeholder}
								name={value.name}
								defaultValue={value.defaultValue}
								required={value.required}
								onChange={onChange}
								pattern={value.pattern}
							/>
						</div>
					))}
			</React.Fragment>
		);
	}
}
