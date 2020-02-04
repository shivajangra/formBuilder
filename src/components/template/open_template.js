import React, { Component } from 'react';
import API from '../../service/templateService';
import './index.css';

export class OpenTemplate extends Component {
 
   async componentDidMount() {
        const { match: { params } } = this.props;
        let userData = await API.get('/getTemplateDetail/'+params.tempId, {});
        let res = userData.data
        if(res.status === 200 && res.result){
            document.getElementById('template').innerHTML = "<h4>"+res.result.template_name+"</h4>"+res.result.template;
        }
      }

    
    render() {
        return (
            <div id="template" className="get-in-touch">  
            </div>
        )
    }
}

export default OpenTemplate