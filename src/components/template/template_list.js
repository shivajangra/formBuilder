import React, { Component } from 'react'
import API from '../../service/templateService';

export class TemplateList extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            templateList : []
        }
        this.handleClick = this.handleClick.bind(this);
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
 

    render() {
        return (
            <div>
                <div className="container templates">
                    <h2>Templates</h2>
                    { this.state.templateList.map(function(item) {
                            return (
                                <div className="panel w-3" onClick={() => this.handleClick} key={item.id}>
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
