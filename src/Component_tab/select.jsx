import React, { Component } from "react";
// import SelectOption from "./selectOption";

export default class select extends Component {
	render() {
		const { selectform, onChange } = this.props;
		return (
			<React.Fragment>
				{selectform.map((value, index) => (
					<div className="form-group" key={index}>
						<label htmlFor={value.id}>{value.label}</label>
						<select
							className={value.class}
							id={value.id}
							value={value.value}
							name={value.name}
							onChange={onChange}>
							<option value={value.option1}>{value.option1}</option>
							<option value={value.option2}>{value.option2}</option>
							<option value={value.option3}>{value.option3}</option>
							<option value={value.option4}>{value.option4}</option>
						</select>
					</div>
				))}
			</React.Fragment>
		);
	}
}
