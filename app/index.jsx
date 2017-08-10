import React from 'react'
import { render } from 'react-dom'


import './static/css/common.less'

import Hello from './containers/Hello/index.jsx'

import Perf from 'react-addons-perf'
if(__DEV__){
    window.Perf = Perf
}

render(
    <Hello />,
    document.getElementById('app')
)