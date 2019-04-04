import React from 'react'
export default  class  extends React.Component {
    
    render(){
        return (
            <header  className="list-header">
                <nav  role="navigation" className="list-nav">
                    <ul  className="nav-list left">
                        <li  className="nav-item route-active"><a   href="/timeline?sort=popular">热门</a>
                        </li>
                        <li  className="nav-item route-active"><a  href="/timeline?sort=newest">最新</a>
                        </li>
                        <li  className="nav-item route-active"><a  href="/timeline?sort=comment">评论</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}