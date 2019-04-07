import React from 'react'
import './home.less'
import Header from './header'
import Item from './item'
import Nav from  './nav/nav'
import Aside from './aside/aside'
import Tags from './aside/tags'
import About from './aside/about'
export default class  extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            lists:Array.apply(null, Array(24))
        }
    }
    async componentDidMount () {

    }

    render() {
        return (
            <main className="container main-container with-view-nav">
                <Nav/>
                <div className="timeline-container">
                    <div className="timeline-entry-list">
                        <Header/>
                        <ul className="entry-list">
                            {this.state.lists.map((i)=> <Item ></Item>)}
                        </ul>
                    </div>
                    <aside ref="aside" className="index-aside aside">
                       <div style={{
                           position :"fixed",
                           width: "20rem",
                       }}>
                           <Tags/>

                           <About/>
                       </div>
                    </aside>
                </div>
            </main>

        )
    }

}