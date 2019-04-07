import Reac from 'react'
import './about.less'
export  default  class extends Reac.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <section    className="more-section">
                <ul  className="more-list">
                    <li  className="item">
                        <a   href="/about" target="_blank">关于</a>
                    </li>
                    <li  className="item">
                        <a   href="https://xitu.io/jobs" target="_blank">招聘</a></li>
                    <li  className="item">
                        <a   href="https://bd.juejin.im?utm_campaign=bd&amp;utm_source=web&amp;utm_medium=more" target="_blank">商务合作</a>
                    </li>
                    <li  className="item">
                        <a   href="/links" target="_blank">友情链接</a>
                    </li>
                </ul>
                <ul  className="more-list">
                    <li  className="item"><a   href="/explore/all" target="_blank">发现更多</a></li>
                    <li  className="item"><span >©2019 掘金</span></li>
                </ul><ul  className="more-list">
                <li  className="item">
                    <a   href="http://www.miibeian.gov.cn" target="_blank">津ICP备15003202号-2</a>
                </li>
            </ul>
                <ul  className="more-list">
                    <li  className="item">
                        <a   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802026719" target="_blank">京公网安备11010802026719号</a>
                    </li>
                </ul>
            </section>
        )
    }
}