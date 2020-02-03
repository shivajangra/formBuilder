import React, { Component } from 'react'
import API from '../../service/templateService';
// import { useHistory } from "react-router-dom";

export class TemplateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templateList : []
        }
        this.onformSubmit = this.onformSubmit.bind(this); 
      }

    async componentDidMount() {
        // Load async data.
        let userData = await API.get('/getTemplates', {});
        console.log('👉 Returned data:', userData);
        if(userData.data.status === 200){
            this.setState({ templateList : userData.data.result});
        }
    }

    handleClick = (item) => {
        console.log(item);
    }
    onformSubmit(dta) { 
        console.log(dta.id)
        this.props.history.push(`/opentemplate/${dta.id}`);
    }

    render() { 
        return (
            <div>
                <div className="container templates">
                    <h2>Templates</h2>
                    { this.state.templateList.map(item => {
                            return (
                                <div className="panel w-3" onClick={ e => this.onformSubmit.call(this,item)} key={item.id}>
                                    <div className="card cursor">
                                        <div className="card-body" >
                                            <p>{item.template_name}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } 

                </div>
            </div>
        )
    }
}

export default TemplateList
