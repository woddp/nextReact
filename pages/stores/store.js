class Action{
    callFuncArr=[];
    constructor(){}
    emit( callback ){
        if(typeof  callback==="function"){
            this.callback=callback;
            this.callFuncArr.push(callback);
        }
    }
    commit(params){
        if( this.callback!=null){
            this.callFuncArr.forEach((func)=>{
                func(params);
            });
        }
    }
}
class  Store {
    state={};
   static instance=null;
    constructor(store){
        this.state=store.state||{};
        this._addAction();
    }
   static State(store){
        if(!this.instance){
            this.instance=new Store(store);
        }
       return this.instance;
   }
    _addAction(){
        Object.keys(this.state).forEach((key,i)=>{
            let value=this.state[key];
            this.state[key]={};
            const  action=new Action();
            this[key]={};
            Object.assign(this[key],{
                value:value, action:action,
            });
        })
    }
}

let store=Store.State({
    state:{
        listen:false, //监听页面
    }
});

export  default store;