// 1,只有在data中声明过的属性才能侦测到，如果data中没有，手动添加，如：vm.xxx = "123"，不能侦测到
// 2,如果你想手动添加一些数据让它侦测到，可以使用vm.$set
// 3,如果数据侦测到了，会给每一个数据加上getter和setter,也就是说这个数据是响应式的数据
// 4,如果数据是数组，里面的对象也能侦测到，里面的字面量不能侦测到
// 5,如果调用数组中的方法，改变数组数据，也会侦测到（重写方法）
// 6,如果改变了数组的长度或索引，并不会引起视图的更新










