import React, { Component } from 'react'

export class FormFields extends Component {

    // value={this.state.email} onChange={this.handleEmailChange}
    constructor(props) {
        super(props);
        this.state = {
            options : []
        };
      }
      
    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state)
    //     this.props.fields = this.state;
    //     this.setState({});
    //     this.props.closepopup();
    //   }
    
    //  handleChange(e) {
    //      this.setState({[e.target.name]: e.target.value});
    //   }
    handleChangeOption(e){
        if(e.target.value){

            let newOption = {
                id : e.target.id,
                name : e.target.name,
                value : e.target.value
            };
            if(this.state.id === e.target.id){
                this.setState({options: [newOption]});
            }else{
                this.setState(pstate => ({
                    options: [...pstate.options,newOption]
                }));
            }
            console.log(e.target.id,this.state);
            this.setState({id:e.target.id});
            this.props.options(this.state.options);
        }
    }
    
    render() {
        return (
             <div id="cb-wrap" className="cb-wrap pull-right">
                 {(this.props.showPopup === 'input' || this.props.showPopup === 'textarea' || this.props.showPopup === 'number') ?
                    <div className="popup">
                        <form onSubmit={this.props.handleSubmit}> 
                            <ul id="1" className="frmb-control ui-sortable popup_inner">
                                <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                    <input name="name" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Name" className="form-control"/>
                                    <br/><br/>
                                    <input name="placeholder" onChange={this.props.handleChange.bind(this)}  placeholder="Enter Field Placeholder" className="form-control"/>
                                </li>
                                <li>
                                <button type="button" className="btn clear" onClick={this.props.closepopup}>Close</button>
                                <button type="submit" className="btn save" >Add Field</button>
                                </li>
                            </ul>
                            </form>
                    </div>
                 : null  
                } 
                {/* {this.props.showPopup === 'textarea' ?
                 <div className="popup">
                     <form onSubmit={this.props.handleSubmit}> 
                        <ul id="2" className="frmb-control ui-sortable popup_inner">
                            <li className="icon-select input-control input-control-5 ui-sortable-handle">
                                <input name="name" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Name" className="form-control"/>
                                <br/><br/>
                                <input name="placeholder" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Placeholder" className="form-control"/>
                            </li>
                            <li>
                            <button type="button" className="btn clear" onClick={this.props.closepopup}>Close</button>
                                <button type="submit" className="btn save" onClick={this.props.addField}>Add Field</button>
                            </li>
                        </ul>
                        </form>
                </div>
                : null  
            } 
                {this.props.showPopup === 'number' ?
                <div className="popup">
                    <form onSubmit={this.props.handleSubmit}> 
                    <ul id="3" className="frmb-control ui-sortable popup_inner">
                        <li className="icon-select input-control input-control-5 ui-sortable-handle">
                            <input name="name" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Name" className="form-control"/>
                            <br/><br/>
                            <input name="placeholder" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Placeholder" className="form-control"/>
                        </li>
                        <li>
                        <button type="button" className="btn clear" onClick={this.props.closepopup}>Close</button>
                                <button type="submit" className="btn save" onClick={this.props.addField}>Add Field</button>
                        </li>
                    </ul>
                    </form>
                </div>
                : null  
            }  */}
                {this.props.showPopup === 'select' ?
                <div className="popup">
                    <form onSubmit={this.props.handleSubmit}> 
                    <ul id="4" className="frmb-control ui-sortable popup_inner">
                        <li className="icon-select input-control input-control-5 ui-sortable-handle">
                            <input name="name" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Name" className="form-control"/>
                        </li>
                        <li className="icon-text input-control input-control-9 ui-sortable-handle">
                            <input name="label" onChange={this.handleChangeOption.bind(this)} id="0_1" onBlur={this.handleChangeOption.bind(this)} placeholder="Enter Options Label" className="form-control"/>
                            <br/><br/>
                            <input name="value" onChange={this.handleChangeOption.bind(this)} id="0_2" onBlur={this.handleChangeOption.bind(this)} placeholder="Enter Options Value" className="form-control"/>
                        </li>
                        <li className="icon-text input-control input-control-9 ui-sortable-handle">
                            <input name="label" onChange={this.handleChangeOption.bind(this)} id="1_1" onBlur={this.handleChangeOption.bind(this)} placeholder="Enter Options Label" className="form-control"/>
                            <br/><br/>
                            <input name="value" onChange={this.handleChangeOption.bind(this)} id="1_2" onBlur={this.handleChangeOption.bind(this)} placeholder="Enter Options Value" className="form-control"/>
                        </li>
                        <li>
                        <button type="button" className="btn clear" onClick={this.props.closepopup}>Close</button>
                                <button type="submit" className="btn save" onClick={this.props.addField}>Add Field</button>
                        </li>
                    </ul>
                    </form>
                </div>
            : null  
                } 
            </div>
        )
    }
}

export default FormFields
