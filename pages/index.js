import   Layout from  './components/layout';
import Link from  'next/link'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Store from './stores/store';
import './index.less'
import './components/header.less'
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
       Store.emit('woddp', (val) =>{
           console.log(val);
            this.setState({
                repoName:val,
            });
       })

    }

   //getInitialProps 是固定的
    static async getInitialProps(){

         return {}
    }

    clickHandleProps(){

    }
    render(){
         return( <Layout>
            <h1>My Blog  {this.state.repoName} </h1>
            <ul>
              
            </ul>

        </Layout>)
    }
}
