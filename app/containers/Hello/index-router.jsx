import React from 'react'
import { render } from 'react-dom'

import { Link } from 'react-router'


class Hello extends React.Component{
    render(){
        return(
            <div>
                <h1>Header</h1>
                <Link to="/List" >123123123</Link>
            </div>
        )
    }
}



export default Hello