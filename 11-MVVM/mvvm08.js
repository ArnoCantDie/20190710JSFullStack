// 编译模板   找到带指令的元素节点  和  插值表达式（v-text）的文本节点
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
            let {name,value:expr} = attr;
            // console.log(value) // school.name
            if(this.isDirective(name)){  
                // console.log(name)  // v-model
                let [,directive] = name.split("-");
                // console.log(directive)
                // console.log(node) // 现在就可以找到模板中带有指令的元素节点了
                CompilerUtil[directive](node,expr,this.vm);
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
            // console.log(content) // {{school.name}}  {{school.age}}
            // console.log(node)  // "{{school.name}}"  node是文本节点
            // console.log(content)  // {{school.name}} content是文本节点中的内容
            CompilerUtil['text'](node,content,this.vm)
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


// 写一个对象，{}，包含了不同的指令对应的不同的处理办法
CompilerUtil = {
    // expr school.name    vm.$data school:{name:xx,age:xx}
    getVal(vm,expr){
        // console.log(expr.split(".")) // ["school", "name"]
        // 第一次data是school:{name:xx,age:xx}  current是"school"
        return expr.split(".").reduce((data,current)=>{
            return data[current]
        },vm.$data);
    },
    model(node,expr,vm){ // node是带指令的元素节点  expr是表达式  vm是vue对象
        // console.log("处理v-model指令")
        // console.log(node)
        // console.log(expr)  
        // console.log(vm)  // Vue {$el: "#app", $data: {…}}   $data: {school: {…}}  $el: "#app"
        // 在这里要做v-model要做的事
        // 要给输入框一个value属性 node是输入框 node.value = xxxx
        let value = this.getVal(vm,expr)
        // console.log(value)  // beida
        let fn =  this.updater["modelUpdater"]
        fn(node,value);
    },
    html(){
        // 在这里要做v-html要做的事
    },
    text(node,expr,vm){
        // console.log("处理v-text指令")  {{}}
        // console.log(node)  // "{{school.name}}"
        // console.log(expr)  // {{school.name}}
        // console.log(vm)  // vue实例
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(vm)
            // console.log(args)  // {{school.name}}
            // let r = this.getVal(vm,args[1])
            // console.log(r)  // beida  100
            return this.getVal(vm,args[1])
        })
        // console.log(content)  // // beida  100
        let fn =  this.updater["textUpdater"]
        fn(node,content);
    },
    // 更新数据
    updater:{
        modelUpdater(node,value){
            node.value = value
        },
        htmlUpdater(){

        },
        // 处理文本节点
        textUpdater(node,value){
            // textContent得到文本节点中内容
            node.textContent = value
        }
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










