class Compiler{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el:document.querySelector(el)
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        // 替换 （编译模板） 用数据来编译
        this.compile(fragment);
        this.el.appendChild(fragment)
    }
    // 编译
    compile(node){
        // console.log(node)  // [input, div, div, ul]
        // childNodes 并不包含li 仅仅是得到子节点
        // console.log(node.childNodes)  // [text, input, text, div, text, div, text, ul, text]
        // node.childNodes 一堆的节点：包含元素节点和文本节点
        let childNodes = node.childNodes;
        // console.log(Array.isArray(childNodes))  // false  伪数组 ["a","b","c"]  {0:"a",1:"b",2"c"}
        // 把一个伪数组转成真实的数组 
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                // console.log(child+"是一个元素节点")
            }else{
                // console.log(child+"是一个文本节点")
            }
        })
    }
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            // appendChild有移动性
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










