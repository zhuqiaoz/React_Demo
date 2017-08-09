import React from 'react'
import { render } from 'react-dom'


import './static/css/common.less'

class Hello extends React.Component{
    render(){
        return (
        <div>
            <h1>Hello world</h1>
        </div>
        )
    }
}

render(
    <Hello />,
    document.getElementById('app')
)