class Compiler{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el:document.querySelector(el)
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        this.compile(fragment);
        this.el.appendChild(fragment)
    }
    isDirective(attrName){
       return attrName.startsWith("v-")
    }
    compileElement(node){
        let attributes = node.attributes; 
        // console.log([...attributes]);
        [...attributes].forEach(attr=>{
            let {name,value} = attr;
            if(this.isDirective(name)){
                // console.log(name+"是一个指令")  
                // console.log(node); 
            }
        })
    }
    compileText(node){
        console.dir(node)
        // console.dir(node.textContent);
    }
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                this.compileElement(child);
            }else{
                this.compileText(child)
            }
        })
    }
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
    isElementNode(node){
        return node.nodeType === 1;
    }
}
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Compiler(this.$el,this)
        }
    }
}










