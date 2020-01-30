import React, { Component } from 'react'

export class FormFields extends Component {
    


    render() {
        return (
             <div id="cb-wrap" className="cb-wrap pull-right">
                 {this.props.showPopup === 'input' ?
                    <div className="popup"> 
                            <ul id="1" className="frmb-control ui-sortable popup_inner">
                                <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                    <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                                    <br/><br/>
                                    <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                                </li>
                                <li>
                                <button type="button" className="btn save">Add Field</button>
                                </li>
                            </ul>
                    </div>
                 : null  
                } 
                {this.props.showPopup === 'textarea' ?
                 <div className="popup">
                        <ul id="2" className="frmb-control ui-sortable popup_inner">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                                <br/><br/>
                                <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn save">Add Field</button>
                            </li>
                        </ul>
                </div>
                : null  
            } 
                {this.props.showPopup === 'number' ?
                <div className="popup">
                    <ul id="3" className="frmb-control ui-sortable popup_inner">
                        <li className="icon-select input-control input-control-5 ui-sortable-handle">
                            <input name="attr['name']" placeholder="Enter Field Name" className="form-control"/>
                            <br/><br/>
                            <input name="attr['placeholder']" placeholder="Enter Field Placeholder" className="form-control"/>
                        </li>
                        <li>
                        <button type="button" className="btn save">Add Field</button>
                        </li>
                    </ul>
                </div>
                : null  
            } 
                {this.props.showPopup === 'select' ?
                <div className="popup">
                    <ul id="4" className="frmb-control ui-sortable popup_inner">
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
            : null  
                } 
            </div>
        )
    }
}

export default FormFields
