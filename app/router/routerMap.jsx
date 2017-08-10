import React from 'react'

import { Router ,Route , IndexRoute } from 'react-router'


import App from '../containers/app'

import Hello from '../containers/Hello/index'

import List from '../containers/list/index'

class RouterMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Hello} />
                    <Route path="List" component={List}></Route>
                </Route>
            </Router>
        )
    }
}

export default RouterMap