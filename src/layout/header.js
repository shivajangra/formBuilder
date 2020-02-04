import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="page_body">
                    <a href="/createtemplate">Create template</a>
                    <a href="/templatelist">TemplateList</a>
                </nav>
            </div>
        )
    }
}

export default Header
