import Link from 'next/link'
import React from 'react'
import Store from '../stores/store';
import css from './header.less'



export default class extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        console.log(props);
        this.screenChange();
    }

    screenChange(){
        // window.addEventListener('resize',(e)=>{
        //     var docWidth = document.body.clientWidth;
        //     console.log(docWidth);
        // })
    }

    handleChange() {
        let d = new Date();
        Store.commit("woddp", d.getTime());
    }

    render() {

        return (
                <header className="main-header main-header visible" flex="dir:top">
                    <div className="container" flex="dir:left">
                                <a href='/' className="logo" flex="cross:center">
                                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金"
                                         className="logo-img" />
                                </a>
                        <nav  role="navigation" className="main-nav" flex-box="1" flex="dir:left">
                            <ul  className="nav-list" flex="dir:left" flex-box="1" >
                                <li  flex-box="1" flex="dir:left" className="main-nav-list">
                                    <div  className="phone-show-menu"><span >首页</span>
                                        <div  className="icon ion-arrow-down-b"></div>
                                    </div>
                                    {/*<ul  className="phone-hide" flex="dir:left">*/}
                                        {/*<li  flex="cross:center"   className="nav-item link-item route-active active"><a*/}
                                             {/*href="/">首页</a></li>*/}
                                        {/*<li  flex="cross:center" className="nav-item link-item activities"><a*/}
                                             {/*href="/activities">动态</a></li>*/}
                                        {/*<li  flex="cross:center"  className="nav-item link-item"><a    href="/topics">话题</a>*/}
                                        {/*</li>*/}
                                        {/*<li flex="cross:center"  className="nav-item link-item book"><a   href="/books">小册</a>*/}
                                        {/*</li>*/}
                                        {/*<li  flex="cross:center" className="nav-item link-item"><a   href="/events/all">活动</a>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}

                                </li>
                                <li flex="dir:right"  className="nav-item search"><form  role="search" className="search-form"><input  placeholder="搜索更新啦" className="search-input" /><img  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="搜索" className="search-icon" /></form></li>
                              </ul>
                        </nav>
                    </div>
                </header>

        )
    }
}
