import Link from 'next/link'
import React from 'react'
import Store12 from '../../stores/store';
import css from './header.less'
import Search from  './search'
import Nav from  './nav'
import  resize from '../../plugin/resize'



export default class extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.resizeModel= resize.getInstance();
    }
    async componentDidMount () {
        this.resizeModel.getResize((width)=>{
            console.log(width);
        });
    }

    async componentWillUnmount(){
        console.log(1231);
    }


    handleChange() {
        let d = new Date();
        Store12.commit("woddp", d.getTime());
    }

    render() {

        return (
                <header className="main-header main-header visible" flex="dir:top">
                    {/*<DynamicResize/>*/}
                    <div className="container" flex="dir:left">
                                <a href='/' className="logo" flex="cross:center">
                                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金"
                                         className="logo-img" />
                                </a>
                        <nav  role="navigation" className="main-nav" flex-box="1" flex="dir:left">
                            <ul  className="nav-list" flex="dir:left" flex-box="1" >
                                <Nav/>
                                <li flex="dir:right cross:center main:center"  className="nav-item search">
                                    <Search/>
                                </li>
                              </ul>
                        </nav>
                    </div>
                </header>

        )
    }
}
