import React from 'react'
import { render } from 'react-dom'

class Header extends React.Component{
    render(){
        return (
            <h1>{this.props.title}</h1>
        )
    }
}

export default Header