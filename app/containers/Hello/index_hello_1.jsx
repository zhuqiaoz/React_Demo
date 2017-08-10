import React from 'react'
import { render } from 'react-dom'


// import './static/css/common.less'

class Hello extends React.Component{
    render(){
        const pls = <h1>Hello World</h1>
        const stu = {fontSize:'6rem',color:'blue'}
        const arr = ['aaa','bbb','ccc']
        return (
            <div>
                <p className="title">123</p>
                <p>123</p>
                <p>123</p>
                {pls}
                <h2 style={{fontSize:'5rem',color:'red'}}>pldsdfsd</h2>
                <h3 style={stu}>ddddddddddddddddd</h3>
                <p onClick={this.clickhandler.bind(this)}>onclick</p>
                <ul>
                    {arr.map(function(item,index){
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <p style={{display:true ? 'block' : 'none'}}>三元表达式</p>
                <p>test</p>
            </div>
        )
    }
        clickhandler(event){

            console.log(Date.now())
            console.log(this.clickhandler)
            event.preventDefault() //阻止默认行为

        }
}

export default Hello
// render(
//     <Hello />,
//     document.getElementById('app')
// )