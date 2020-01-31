import React, { Component } from "react";
import uuid from 'uuid';
 

export default class FormBuilder extends Component {
  render() {
    const { fields, onSubmit } = this.props;

    return (
      <form className="input-form" onSubmit={onSubmit}>
        <div className="form-group">
            {fields.map(field => {
            switch (field.type) {
                case "input":
                return(
                        <div className="input-group" key={uuid.v4()}>
                            <input className="dynamic-input-control" key={uuid.v4()} {...field.attr} />
                        </div>
                );

                case "number":
                return(
                        <div className="input-group" key={uuid.v4()}>
                            <input className="dynamic-input-control" key={uuid.v4()} {...field.attr} />
                        </div>
                );


                case "select":
                return (
                    <div className="input-group" key={uuid.v4()}>
                    <select className="dynamic-input-control" key={uuid.v4()} {...field.attr}>
                    {field.options.map(({ label, value, attr }) => (
                        <option value={value} key={value} {...attr}>
                        {label}
                        </option>
                    ))}
                    </select></div>
                );

                case "textarea":
                return <div className="input-group" key={uuid.v4()}><textarea className="dynamic-input-control" key={uuid.v4()} {...field.attr} /></div>;

                case "button":
                return (
                    <div className="input-group" key={uuid.v4()}>
                    <button className="btn" key={uuid.v4()} {...field.attr}>
                    {field.label}
                    </button></div>
                );

                default:
                //   throw "Invalid element";
                return null;
            }
            })}
        </div>
      </form>
    );
  }
}
