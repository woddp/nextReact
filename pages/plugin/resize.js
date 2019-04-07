class  OnResize {

    maxWidth=980;
    instance=null;
    constructor(){

    }
    getResize(resolve){
        // window.addEventListener('resize',(e)=>{
        //     var docWidth = document.body.clientWidth;
        //     resolve(docWidth);
        // });
    }
    static getInstance(){
        if(!this.instance){
            this.instance=new OnResize();
        }
        return this.instance;
    }
}
export  default OnResize;