import React from 'react'
import { render } from 'react-dom'


import './static/css/common.less'

class Hello extends ReactDOM.render{
    render(){
        return <h1> Hello world</h1>
    }
}

render(
    <Hello />,
    document.getElementById('app')
)