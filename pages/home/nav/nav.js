import React from 'react';
import './nav.less'

export default class extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav role="navigation" className="view-nav">
                <ul className="nav-list left">
                    <li className="nav-item active">
                        <div
                            className="category-popover-box"><a>推荐</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a>关注</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >后端</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >前端</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >Android</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >iOS</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >人工智能</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >开发工具</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >代码人生</a></div>
                    </li>
                    <li className="nav-item">
                        <div
                            className="category-popover-box"><a
                        >阅读</a></div>
                    </li>
                    <li className="nav-item right"><a href="/subscribe/subscribed">标签管理</a></li>
                </ul>
            </nav>
        )
    }
}