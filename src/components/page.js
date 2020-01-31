import React, { Component } from "react";
import FormBuilder from "./form_builder";
import FormFields from './form_fields';

// const fields = [
//     {
//         type: "input",
//         attr: {
//             required: true,
//             name: "full_name",
//             placeholder: "Enter your full name"
//         }
//     },
//     {
//         type: "select",
//         options: [
//             {
//                 label: "Male",
//                 value: "male"
//             },
//             {
//                 label: "Female",
//                 value: "female"
//             }
//         ],
//         attr: {
//             name: "gender",
//             value: "male"
//         }
//     },
//     {
//         type: "textarea",
//         attr: {
//             placeholder: "Comment",
//             name: "comment"
//         }
//     },
//     {
//         type: "button",
//         label: "Submit",
//         attr: {
//             type: "submit"
//         }
//     }
// ];

export default class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: null,
            fields:[]
        };
      }
    
    onSubmit = e => {
        e.preventDefault();
        console.log(e.target);
        // const values = {};
        // fields.forEach(field => {
        //     const { name } = field.attr;
        //     if (name) values[name] = e.target[name].value;
        // });
        // console.log(values);
    };
   

    setFieldsUi(e,val_type) {
        this.setState(state => ({ type: e , val_type: val_type }));
    }
    closepopup(e){
        this.setState(state => ({ type: e }));
    }
 
     handleSubmit(e) {
        e.preventDefault();
        let current_field = {
            type: this.state.type?this.state.type:'input',
            attr: { 
                    type: this.state.val_type?this.state.val_type:'',
                    name: this.state.name?this.state.name:'name',
                    placeholder: this.state.placeholder?this.state.placeholder:''
                }
            }
        this.setState({})
        this.setState(prevState => ({
            fields: [...prevState.fields, current_field]
          }))
          console.log(this.state);
          this.closepopup(null);
      }
    
     handleChange(e) {
         this.setState({[e.target.name]: e.target.value});
      }


    
    render() {
         
        return (
            <div>
                <div className="popups">
                    <FormFields handleChange={this.handleChange.bind(this)} showPopup={this.state.type} closepopup={this.closepopup.bind(this,null)} handleSubmit={this.handleSubmit.bind(this)}/>
                </div>
                <div className="build-form"> 
                    <div className="form-wrap form-builder">
                        <FormBuilder onSubmit={this.onSubmit} fields={this.state.fields} />
                    </div>
                    <div id="cb-wrap" className="cb-wrap pull-right">
                        <ul id="control-box" className="frmb-control ui-sortable">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'select')} data-type="select">
                                <span>Select</span>
                            </li>
                            <li className="icon-text input-control input-control-9 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'input','text')} data-type="text">
                                <span>Text Field</span>
                            </li>
                            <li className="icon-textarea input-control input-control-13 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'textarea')} data-type="textarea">
                                <span>Text Area</span>
                            </li>
                            <li className="icon-number input-control input-control-12 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'number','number')} data-type="number">
                                <span>Number</span>
                            </li> 
                            <li className="icon-checkbox-group input-control input-control-6 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'checkbox')} data-type="checkbox-group">
                                <span>Checkbox Group</span>
                            </li>
                            <li className="icon-date input-control input-control-11 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'date')} data-type="date">
                                <span>Date Field</span>
                            </li>
                            <li className="icon-file input-control input-control-10 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'file')} data-type="file">
                                <span>File Upload</span>
                            </li>
                            <li className="icon-hidden input-control input-control-2 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'hidden')} data-type="hidden">
                                <span>Hidden Input</span>
                            </li>
                            <li className="icon-paragraph input-control input-control-3 ui-sortable-handle" onClick={this.setFieldsUi.bind(this,'paragraph')} data-type="paragraph">
                                <span>Paragraph</span>
                            </li>
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
