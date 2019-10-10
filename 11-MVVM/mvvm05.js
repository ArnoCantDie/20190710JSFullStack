// 编译模板
class Compiler{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el:document.querySelector(el)
        this.vm = vm;
        // 此时，所有的节点就位于文档碎片
        let fragment = this.node2fragment(this.el);
        // 在内存中编译一堆的节点
        this.compile(fragment);
        // 把编译好的节点重新扔到网页上
        this.el.appendChild(fragment)
    }
    // 判断是否是一个指令 
    isDirective(attrName){
       return attrName.startsWith("v-")
    }
    // 编译元素节点
    compileElement(node){
        let attributes = node.attributes; 
        // console.log(node);  // 打印出所有的元素节点
        [...attributes].forEach(attr=>{
            let {name,value} = attr;
            if(this.isDirective(name)){
                console.log(node) // 现在就可以找到模板中带有指令的元素节点了
            }
        })
    }
    // 编译文本节点
    compileText(node){
        // console.dir(node) // 得到所有的文本节点
        let content = node.textContent;
        // console.log(content) 得到所有的文本节点中的内容
        let reg = /\{\{(.+?)\}\}/;  // {}在正则中有特殊的含意，需要转义
        reg.test(content) // 如果content满足我们写的正则，返回ture，否则返回false
        if(reg.test(content)){
            console.log(content) // {{school.name}}  {{school.age}}
        }

    }
    // 编译的方法
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child=>{
            // child就表示每一个节点
            // 如果child元素节点，调用 compileElement
            if(this.isElementNode(child)){
                this.compileElement(child);
                // 可以一个元素节点中嵌套其它的元素点，还可能嵌套文本节点
                // 如果child内部还有其它节点，需要利用递归重新编译
                this.compile(child)
            }else{
                // 否则调用compileText
                this.compileText(child)
            }
        })
    }
    // 把网页上的节点扔到内存中
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

// VUE类  负责整体的高度
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        if(this.$el){
            new Compiler(this.$el,this)
        }
    }
}










