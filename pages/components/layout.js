import Header from './header/header'
import Nav from '../home/nav/nav'

const style={
    height:'10.5rem',
}
export  default  (props)=>{
    return (
            <div >
                <Header/>
                <div style={style}></div>
                {props.children}
            </div>
    )
}