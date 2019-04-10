import React, { Component } from "react";
// import Button from '@material-ui/core/Button';

export default class demo extends Component {
  render() {
    const { formElements, onChange } = this.props;

    return (
      <div>
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
                value={value.value}
                required={value.required}
                onChange={onChange}
                pattern={value.pattern}
              />
            </div>
          ))}
      </div>
    );
  }
}
