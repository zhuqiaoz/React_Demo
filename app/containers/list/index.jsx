import React from 'react'

import { link } from 'react-router'


class Link extends React.Component{
    render(){
        return(
            <div>
                <link to="/list">123123</link>
            </div>
        )
    }
}

export default Link