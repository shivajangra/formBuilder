import React, { Component } from "react";
import uuid from 'uuid';
 

export default class FormBuilder extends Component {
  render() {
    const { fields } = this.props;

    return (
      <form className="contact-form row" name="field_form" id="field_form" method="post" action="http://localhost:4000/api/addFieldata"> 
            {fields.map(field => {
            switch (field.type) {
                case "input":
                return(
                        <div className="form-field col x-50" key={uuid.v4()}>
                            <input className="input-text js-input" key={uuid.v4()} {...field.attr} />
                        </div>
                );

                case "number":
                return(
                        <div className="form-field col x-50" key={uuid.v4()}>
                            <input className="input-text js-input" key={uuid.v4()} {...field.attr} />
                        </div>
                );


                case "select":
                return (
                    <div className="form-field col x-50" key={uuid.v4()}>
                    <select className="input-text js-input" key={uuid.v4()} {...field.attr}>
                    {field.options.map(({ label, value, attr }) => (
                        <option value={value} key={value} {...attr}>
                        {label}
                        </option>
                    ))}
                    </select></div>
                );

                case "textarea":
                return <div className="form-field col x-100" key={uuid.v4()}><textarea className="input-text js-input" key={uuid.v4()} {...field.attr} /></div>;

                case "button":
                return (
                    <div className="form-field col x-100 align-center" key={uuid.v4()}>
                    <button className="submit-btn" key={uuid.v4()} {...field.attr}>
                    {field.label}
                    </button></div>
                );

                default:
                //   throw "Invalid element";
                return null;
            }
            })}
      </form>
    );
  }
}

