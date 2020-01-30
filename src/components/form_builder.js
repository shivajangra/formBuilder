import React, { Component } from "react";
import uuid from 'uuid';
 

export default class FormBuilder extends Component {
  render() {
    const { fields, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        {fields.map(field => {
          switch (field.type) {
            case "input":
              return <input key={uuid.v4()} {...field.attr} />;

            case "select":
              return (
                <select key={uuid.v4()} {...field.attr}>
                  {field.options.map(({ label, value, attr }) => (
                    <option value={value} key={value} {...attr}>
                      {label}
                    </option>
                  ))}
                </select>
              );

            case "textarea":
              return <textarea key={uuid.v4()} {...field.attr} />;

            case "button":
              return (
                <button key={uuid.v4()} {...field.attr}>
                  {field.label}
                </button>
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
