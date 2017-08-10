import React from 'react'

import { Route ,Route , IndexRoute } from 'react-router'


import App from '../containers/app'

import Hello from '../containers/Hello/index'

class RouterMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Hello} />>
                    {/* <Route path="list" component={list} /> */}
                </Route>
            </Router>
        )
    }
}

export default RouterMap