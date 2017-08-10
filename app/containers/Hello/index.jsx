import React from 'react'
import { link } from 'react-router'
import { render } from 'react-dom'



import Header from '../../compontents/Header/index.jsx'

class Hello extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            now : Date.now()
        }
    }

    render(){
        return(
            <div>
                <Header title="我是头部"/> 
                <p style={{cursor : 'pointer'}} onClick={this.banktitle.bind(this)}>点击当前时间{this.state.now}</p>
                <hr/>
                <p>123</p>
                {/* <link to="/link">99999999</link> */}
            </div>
        )
    }

    banktitle(){
        this.setState({
            now : Date.now()
        })
    }
    
    componentDidMount(){
        //目录渲染完成后，进行的操作。类似vue的 asjx
    }

    componentDidUpdate(pre,prs){
        //数据更新
        console.log(123)
    }

    shouldComponentUpdate(){

    }

    componentWillUnmount(){
        // 销毁数据
    }
}




export default Hello