import  Link from  'next/link'
import React from 'react'
import Store from '../stores/store';

const linkStyle={
 marginRight:'15px',
  fontSize:'25px',
};

const style=   <style jsx>
    {`

                   `}
</style>;


export  default class extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        console.log(props);
    }

    handleChange(){
        let d=new Date();
        Store.commit("woddp",d.getTime());
    }

    render(){

        return (
            <div>
                <style jsx>
                    {`
                    a{
     color:#EF141F;
     font-size:26px;
     line-height:40px;
     text-decoration:none;
     padding:0 10px;
     text-transform:uppercase;
    }
    a:hover{
     opacity:0.8;
    }
                   `}
                </style>
                <Link href="/">
                    <a  style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>about</a>
                </Link>
                <a   onClick={this.handleChange} style={linkStyle}>测试</a>
            </div>
        )
    }
}
