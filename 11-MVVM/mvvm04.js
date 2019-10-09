class Compiler{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el:document.querySelector(el)
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        this.compile(fragment);
        this.el.appendChild(fragment)
    }
    // 判断一个属性是否是一个指令
    isDirective(attrName){
       return attrName.startsWith("v-")
    }
    // 编译元素节点
    compileElement(node){
        let attributes = node.attributes; // 某个元素的属性节点
        // console.log(attributes) // 伪数组
        [...attributes].forEach(attr=>{
            // console.log(typeof attr)  // type="text"  v-model="school.name"
            let {name,value} = attr;
            // console.log(name,value) // type  text       v-model  school.name
            if(this.isDirective(name)){
                console.log(name+"是一个指令")  // v-model是一个指令
                console.log(node); // 包含这个指令的元素  <input type="text" v-model="school.name">
            }
        })
    }
    // 编译文本节点
    compileText(node){

    }
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                // 元素节点
                this.compileElement(child);
            }else{
                // 文本节点
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










