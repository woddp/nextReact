import React from  'react';
import store from "../../stores/store";

export  default  class  extends React.Component {
    constructor(props){
        super(props);
        this.state={
            down:false,
            isDown:false,
        }
        this.handleShow=this.handleShow.bind(this);
    }
    async componentDidMount(){
    }
    handleShow(e){
        e.stopPropagation();
        // let d=this.state.down?false:true;
        this.setState({
            down:!this.state.down,
        });
    }

    render(){
        return (
            <li  flex-box="1" flex="dir:left" className="main-nav-list">
                <div  className="phone-show-menu" onClick={this.handleShow}>
                    <span >首页</span>
                    <div  className="icon ion-arrow-down-b"></div>
                </div>
                <ul  className={['phone-hide',this.state.down?"show":""].join(' ')} flex="dir:left">
                <li  flex="cross:center"   className="nav-item link-item route-active active"><a
                href="/">首页</a></li>
                <li  flex="cross:center" className="nav-item link-item activities"><a
                href="/activities">动态</a></li>
                <li  flex="cross:center"  className="nav-item link-item"><a    href="/topics">话题</a>
                </li>
                <li flex="cross:center"  className="nav-item link-item book"><a   href="/books">小册</a>
                </li>
                <li  flex="cross:center" className="nav-item link-item"><a   href="/events/all">活动</a>
                </li>
                </ul>
            </li>
        )
    }

}