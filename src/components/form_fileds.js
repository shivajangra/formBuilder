import React, { Component } from 'react'

export class FormFields extends Component {
    render() {
        return (
             <div id="cb-wrap" className="cb-wrap pull-right">
                        <ul id="1" className="frmb-control ui-sortable" id="input_field">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                                <br/><br/>
                                <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn save">Add Field</button>
                            </li>
                        </ul>
                        <ul id="2" className="frmb-control ui-sortable" id="textarea_field">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                                <br/><br/>
                                <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn save">Add Field</button>
                            </li>
                        </ul>
                        <ul id="3" className="frmb-control ui-sortable" id="number_field">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                                <br/><br/>
                                <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn save">Add Field</button>
                            </li>
                        </ul>
                        <ul id="4" className="frmb-control ui-sortable" id="select_field">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                            </li>
                            <li className="icon-text input-control input-control-9 ui-sortable-handle">
                                <input name="options['label']" placeholder="Enter Options Label" className="form-control"/>
                                <br/><br/>
                                <input name="options['value']" placeholder="Enter Options Value" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn save">Add Field</button>
                            </li>
                        </ul>
            </div>
        )
    }
}

export default FormFields
