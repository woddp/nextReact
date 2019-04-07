import React from 'react'

export  default  class extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="section shadow tags" >
                <div className="header">
                    <div className="title">
                        <span>热门标签</span>
                    </div>
                    <div className="right">
                        <a href="/subscribe/all" target="_blank" rel=""  className="tag-link">查看全部</a>
                    </div>
                </div>
                <div className="content">
                    <div className="tag-list">
                        <a href="/tag/%E6%9E%B6%E6%9E%84" target="_blank" rel=""   className="tag">架构</a>
                        <a href="/tag/%E5%BC%80%E6%BA%90" target="_blank" rel=""   className="tag">开源</a>
                        <a href="/tag/%E7%AE%97%E6%B3%95" target="_blank" rel=""   className="tag">算法</a>
                        <a href="/tag/GitHub" target="_blank" rel=""   className="tag">GitHub</a><a href="/tag/%E9%9D%A2%E8%AF%95" target="_blank" rel=""   className="tag">面试</a>
                        <a href="/tag/%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83" target="_blank" rel=""   className="tag">代码规范</a>
                        <a href="/tag/%E4%BA%A7%E5%93%81" target="_blank" rel=""   className="tag">产品</a>
                        <a href="/tag/%E6%8E%98%E9%87%91%E7%BF%BB%E8%AF%91%E8%AE%A1%E5%88%92" target="_blank" rel=""   className="tag">掘金翻译计划</a>
                    </div>
                </div>
            </div>
        )
    }
}