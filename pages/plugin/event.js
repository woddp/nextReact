import store from '../stores/store'
export  default ()=>{
    document.body.onclick= ()=> {
        let event=window.event||event;
        store.listen.action.commit(event.target.className);
    }
}