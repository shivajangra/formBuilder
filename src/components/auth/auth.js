import React, { Component } from 'react'
import './index.css';

export class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'user'
        }
        if(sessionStorage.getItem('user') === 'admin'){
            this.props.history.push(`/createtemplate`);
        }else if(sessionStorage.getItem('user')){
            this.props.history.push(`/templatelist`);
        }
      }
  
    login(){ 
        sessionStorage.setItem('user',this.state.name);
        if(this.state.name === 'admin'){
            this.props.history.push(`/createtemplate`);
        }else{
            this.props.history.push(`/templatelist`);
        }
    }

    render() {
        return (
            <div>
                <div className="login">
                    <div className="login-triangle"></div>
                    
                    <h2 className="login-header">Log in</h2>

                    <form className="login-container">
                        <p><input type="email" placeholder="Email" onChange={ e => this.setState({ name : e.target.value})}/></p>
                        <p><input type="password" placeholder="Password" /></p>
                        <p><input type="button" onClick={this.login.bind(this)} value="Log in" /></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth
