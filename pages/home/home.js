import React from 'react'
import './home.less'
import Header from './header'
import Item from './item'
export default class  extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="container main-container with-view-nav">
                <div className="timeline-container">
                    <div className="timeline-entry-list">
                        <Header/>
                        <ul className="entry-list">
                            <Item/>
                        </ul>
                    </div>
                    <aside className="index-aside aside">

                    </aside>
                </div>
            </main>

        )
    }

}