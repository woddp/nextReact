import   Layout from  './components/layout';
import Link from  'next/link'
import fetch from 'isomorphic-unfetch'
import React from 'react'
import Store from './stores/store';
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
         const res=await  fetch('http://woddp.yxilin.com/api/home/Pornhub/lists?c=111');
         const data = await res.json()
         return {data}
    }

    clickHandleProps(){

    }
    render(){
         return( <Layout>
            <h1>My Blog  {this.state.repoName} </h1>
            <ul>
                {this.props.data.data.data.map(({title,key})=>{
                    return (
                        <PostLink key={`${key}`}  id={`${key}`} title={title}/>
                    )
                })}
            </ul>
             <style jsx>
                 {`
                    *{
                        margin:0;
                        padding:0;
                       }
                       h1,a{
                        font-family:'Arial';
                       }
                       h1{
                        margin-top:20px;
                        background-color:#EF141F;
                        color:#fff;
                        font-size:50px;
                        line-height:66px;
                        text-transform: uppercase;
                        text-align:center;
                       }
                       ul{
                        margin-top:20px;
                        padding:20px;
                        background-color:#000;
                       }
                       li{
                        list-style:none;
                        margin:5px 0;
                       }
                       a{
                        text-decoration:none;
                        color:#B4B5B4;
                        font-size:24px;
                       }
                       a:hover{
                        opacity:0.6;
                       }
                 `}
             </style>
        </Layout>)
    }
}
