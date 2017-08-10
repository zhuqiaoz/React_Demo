import React from 'react'
import { render } from 'react-dom'

import { hashHistory } from 'react-router'

import RouterMap from './router/routerMap.jsx'



import './static/css/common.less'


// import Perf from 'react-addons-perf'
// if(__DEV__){
//     window.Perf = Perf
// }

render(
    <RouterMap history={hashHistory} />,
    document.getElementById('app')
)