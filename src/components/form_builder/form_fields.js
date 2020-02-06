import React, { Component } from 'react'
import uuid from 'uuid';

export class FormFields extends Component {

    // value={this.state.email} onChange={this.handleEmailChange}
    constructor(props) {
        super(props);
        this.state = {
            options : [],
            optionList : [{
                id: uuid.v4()
            }]
        };
        // this.handleChangeOption = this.handleChangeOption.bind(this); 
      }
 
    handleChangeOption(e){
        if(e.target.value){
            let newOption = {
                id : e.target.id,
                name : e.target.name,
                value : e.target.value
            }; 
            let my_arr =  this.state.options;
            if(my_arr.some(option => option.id === e.target.id)){
                for (var i in my_arr) {
                    if (my_arr[i].id === e.target.id) {
                        my_arr[i] = newOption
                        break;
                    }
                } 
            } else{
                my_arr.push(newOption);
            }
            
            this.setState({
                options: my_arr
            });
            this.props.options(this.state.options);
        }
    }
    
    addnewOption(e){ 
            this.setState(prevState => ({
                optionList: [...prevState.optionList, {id: uuid.v4()}]
              }))
    }
    removeOptionLi(e){ 
        this.setState({
            optionList : this.state.optionList.filter((el)=>{return el.id!==e.id})
          });
    }
    render() {
        return (
             <div id="cb-wrap" className="cb-wrap pull-right">
                 {(this.props.showPopup === 'input' || this.props.showPopup === 'file' || this.props.showPopup === 'textarea' || this.props.showPopup === 'number' || this.props.showPopup === 'date') ?
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
                {this.props.showPopup === 'select' ?
                <div className="popup">
                    <form onSubmit={this.props.handleSubmit}> 
                    <ul id="4" className="frmb-control ui-sortable popup_inner">
                        <li className="icon-select input-control input-control-5 ui-sortable-handle">
                            <input name="name" onChange={this.props.handleChange.bind(this)} placeholder="Enter Field Name" className="form-control"/>
                        </li>
                        <li className="icon-text input-control input-control-9 ui-sortable-handle">
                            <p>Options &ensp;&ensp; <span onClick={this.addnewOption.bind(this)}>Add New</span></p>
                              
                            { this.state.optionList.map((item,index) => {
                                    return ( 
                                        <p id={item.id} key={item.id}>
                                            <input name="label" onChange={ e => this.handleChangeOption.call(this,e)} id={`${index}_1`} placeholder="Enter Options Label" className="form-control"/>
                                            &ensp;&ensp;<input name="value" onChange={ e => this.handleChangeOption.call(this,e)} id={`${index}_2`} placeholder="Enter Options Value" className="form-control"/>
                                            &ensp; <span onClick={ e => this.removeOptionLi.call(this,item)}>X</span></p>
                                    )
                                })
                            }
 
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
                 {this.props.showPopup === 'paragraph' ?
                <div className="popup">
                    <form onSubmit={this.props.handleSubmit}> 
                    <ul id="4" className="frmb-control ui-sortable popup_inner">
                        <li className="icon-select input-control input-control-5 ui-sortable-handle">
                            <textarea name="innerhtml" onChange={this.props.handleChange.bind(this)} placeholder="Enter innerHtml" className="form-control"/>
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
