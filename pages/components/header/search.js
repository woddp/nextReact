import React from 'react'
import store from '../../stores/store'
export  default  class  extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            formSelect:false,
        };
        this.handleForm=this.handleForm.bind(this);
    }
    async componentDidMount(){
        store.listen.action.emit((className)=>{
            console.log("search："+className);
             if(className!=='search-input'){
                 this.setState({
                     formSelect:false,
                 });
             }
        });
    }
    handleForm(e){
        e.stopPropagation();
       this.setState({
               formSelect:true,
       });
    }
    render(){
        return (
            <form   role="search" className={['search-form',this.state.formSelect?'active':''].join(' ')} onClick={this.handleForm}>
                <input  placeholder="搜索更新啦" className="search-input" /><img  src={this.state.formSelect?'https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon-focus.470748c.svg':'https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg'} alt="搜索" className="search-icon" />
            </form>
        )
    }
}