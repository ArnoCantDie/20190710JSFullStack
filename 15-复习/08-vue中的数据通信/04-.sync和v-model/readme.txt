vue 是单文件组件 es6模块化  vue-cli

cli服务：npm i @vue/cli-service-global -g 

组件间的通信：8种  
    父中的数据传递给子：通过属性   :money="money"
    子中要修改父中的数据：  
        给子传递一个@change="change"
        子中需要触发change，说白了，触发父中的change方法，触发时，可以把新的数据传递过去
        孙中可以直接this.$parent.$emit()  触发它上上级的方法




















