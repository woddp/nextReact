import React from  'react'
export  default  class  extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section   className="shadow section link-section section">
                <ul  className="link-list"><li  className="item">
                    <a   className="link" href="/collections/recommended" target="_blank">
                        <img  src="https://b-gold-cdn.xitu.io/v3/static/img/collections.945b9ae.png" className="icon" />
                        <span  className="title">收藏集</span></a></li><li  className="item">
                    <a className="link" href="/extension" target="_blank">
                        <img  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-extension-icon.4b79fb4.png" className="icon" />
                        <span  className="title">下载掘金浏览器插件</span></a>
                </li>
                    <li  className="item">
                        <a   className="link" href="https://github.com/xitu/gold-miner"  target="_blank">
                            <img  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-miner.b78347c.png" className="icon" />
                            <span  className="title">前往掘金翻译计划</span></a></li><li  className="item">
                        <a   className="link" href="https://bd.juejin.im?utm_campaign=bd&utm_source=web&utm_medium=link" target="_blank">
                            <img  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-partner.4dd2d8c.png" className="icon" />
                            <span  className="title">商务合作</span>
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}