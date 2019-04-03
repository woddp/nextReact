import Link from 'next/link'
import React from 'react'
import Store from '../stores/store';
import css from './header.less'



export default class extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        console.log(props);
    }

    handleChange() {
        let d = new Date();
        Store.commit("woddp", d.getTime());
    }

    render() {

        return (
                <header className="main-header main-header visible">
                    <div className="container">
                                <a href='/' className="logo">
                                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金"
                                         className="logo-img" />
                                </a>

                        <nav  role="navigation" className="main-nav">
                            <ul  className="nav-list">
                                <li  className="main-nav-list">
                                    <div  className="phone-show-menu"><span >首页</span>
                                        <div  className="icon ion-arrow-down-b"></div>
                                    </div>
                                    <ul  className="phone-hide">
                                        <li  className="nav-item link-item route-active active"><a
                                             href="/">首页</a></li>
                                        <li  className="nav-item link-item activities"><a
                                             href="/activities">动态</a></li>
                                        <li  className="nav-item link-item"><a    href="/topics">话题</a>
                                        </li>
                                        <li  className="nav-item link-item book"><a   href="/books">小册</a>
                                        </li>
                                        <li  className="nav-item link-item"><a   href="/events/all">活动</a>
                                        </li>
                                    </ul>
                                </li>
                              </ul>
                        </nav>
                    </div>
                    
                </header>

        )
    }
}
