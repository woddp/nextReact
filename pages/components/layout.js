import Header from  './header'
const  layoutStyle={
    margin:'20px',
    padding:'20px',
    border:'1px solid #ddd'
}
export  default  (props)=>{
    return (
            <div style={layoutStyle}>
                <Header/>
                {props.children}
            </div>
    )
}