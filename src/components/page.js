import React, { Component } from "react";
// import FormBuilder from "./form_builder";
import FormFields from './form_fileds';

const fields = [
    {
        type: "input",
        attr: {
            required: true,
            name: "full_name",
            placeholder: "Enter your full name"
        }
    },
    {
        type: "select",
        options: [
            {
                label: "Male",
                value: "male"
            },
            {
                label: "Female",
                value: "female"
            }
        ],
        attr: {
            name: "gender",
            value: "male"
        }
    },
    {
        type: "textarea",
        attr: {
            placeholder: "Comment",
            name: "comment"
        }
    },
    {
        type: "button",
        label: "Submit",
        attr: {
            type: "submit"
        }
    }
];

export default class Page extends Component {
    onSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        const values = {};

        fields.forEach(field => {
            const { name } = field.attr;

            if (name) values[name] = e.target[name].value;
        });
        console.log(values);
    };

    setFieldsUi(e) {
        console.log(e);
        // this.setState(state => ({
        //   isToggleOn: !state.isToggleOn
        // }));
      }

    render() {
        return (
            <div>
                <div className="popups">
                    <FormFields />
                </div>
                <div className="build-form"> 
                    <div className="form-wrap form-builder">
                        {/* <FormBuilder onSubmit={this.onSubmit} fields={fields} /> */}
                    </div>
                    <div id="cb-wrap" className="cb-wrap pull-right">
                        <ul id="control-box" className="frmb-control ui-sortable">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle" onClick={this.setFieldsUi} data-type="select">
                                <span>Select</span>
                            </li>
                            <li className="icon-text input-control input-control-9 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'input')} data-type="text">
                                <span>Text Field</span>
                            </li>
                            <li className="icon-textarea input-control input-control-13 ui-sortable-handle" data-type="textarea">
                                <span>Text Area</span>
                            </li>
                            <li className="icon-number input-control input-control-12 ui-sortable-handle" data-type="number">
                                <span>Number</span>
                            </li>
                            {/* <li className="icon-autocomplete input-control input-control-0 ui-sortable-handle" data-type="autocomplete">
                                <span>Autocomplete</span>
                            </li>
                            <li className="icon-button input-control input-control-1 ui-sortable-handle" data-type="button">
                                <span>Button</span>
                            </li> */}
                            <li className="icon-checkbox-group input-control input-control-6 ui-sortable-handle" data-type="checkbox-group">
                                <span>Checkbox Group</span>
                            </li>
                            <li className="icon-date input-control input-control-11 ui-sortable-handle" data-type="date">
                                <span>Date Field</span>
                            </li>
                            <li className="icon-file input-control input-control-10 ui-sortable-handle" data-type="file">
                                <span>File Upload</span>
                            </li>
                            <li className="icon-hidden input-control input-control-2 ui-sortable-handle" data-type="hidden">
                                <span>Hidden Input</span>
                            </li>
                            <li className="icon-paragraph input-control input-control-3 ui-sortable-handle" data-type="paragraph">
                                <span>Paragraph</span>
                            </li>
                            {/* <li className="icon-radio-group input-control input-control-7 ui-sortable-handle" data-type="radio-group">
                                <span>Radio Group</span>
                            </li>  */}
                            </ul>
                            <div className="form-actions btn-group">
                                <button type="button" className="btn clear">Clear</button>
                                <button type="button" className="btn save">Save</button>
                            </div>
                        </div>
                    </div> 
             </div>
        )
    }
}
