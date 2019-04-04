import Header from './header/header'
import Nav from './nav/nav'

const style={
    height:'10.5rem',
}
export  default  (props)=>{
    return (
            <div >
                <Header/>
                <Nav/>
                <div style={style}></div>
                {props.children}
            </div>
    )
}