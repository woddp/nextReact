
var  Store12={
    list:[],
    editA:[],
    commit:function (option,val) {
        if(!this._isVal(option)){
            this.list.push({value:val,key:option});
        }
        this._change(option,val);
    },
    _isVal:function (key,lists=[]) {
        let is=false;
        for (let item of lists){
            if(item.key===key){
                is=true;
                break;
            }
        }
        return is;
    },
    _change:function (key,val) {
        for (let item of this.editA){
            if(item.key===key){
                item.val(val);
            }
        }
    },
    emit:function (key,callback) {
        if(!this._isVal(key,this.editA)){
            this.editA.push({key:key,val:callback});
        }
    }
}

export default  Store12;