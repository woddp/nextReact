import   Layout from  './components/layout';
import Link from  'next/link'
import React from 'react'
import './index.less'
import './components/header/header.less'
import event from  './plugin/event'
import Home from  './home/home'
const  PostLink=(props)=>(
    <li>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export  default  class  extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           repoName:'',
           repoUrl:''
       };
    }



   //getInitialProps 是固定的
    static async getInitialProps(){
         return {}
    }
    async componentDidMount(){
        event(); //监听全局事件
    }
    clickHandleProps(){

    }
    render(){
         return(
             <Layout>
               <Home/>
            </Layout>)
    }
}
