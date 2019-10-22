
安装redux和react-redux:
    npm i redux react-redux -S

react-redux中提供了一个方法，叫connect方法，这个方法就可以把redux中状态映射到react中的某个组件中，如果映射成功了，这个组件就变成了智能组件，所谓的智能组件就是这指这个组件中有状态。

connect表示连接，你可以当成，是把redux和react连接起来，这里的连接是指把redux中的某个状态，连接到react中的某个组件上，也就是我们说的把
redux中的状态映射到react中的某个组件让，这个组件变成智能组件。

你想让哪个组件变成智能组件就在哪个组件上使用react-redux。


action分两种：同步的action，异步的action。
如果一个action发出后，reducer可以立马计算出新的state，就个action就是同步的action。
如果一个action发出后，reducer不能立马计算出新的state，这个action就是异步的acton


有一个同步的+1操作，又有一个异步的+1操作。

不管是同步和异步，最终都是+1操作。也就是说，无论你是同步和还是异步，都使用INCREMENT这个action。

实现异步的action creator，最后还是调用同步的INCREMENT


异步的action creator需要返回一个函数，这个函数中有两个参数：dispatch，getState

默认情况下，redux不支持异步的actions，如果你想使用异步的actions，需要使用中间件来解决。

在redux中，有很多的中间件，其中有一类中间件就是来解决异步的aciton。

在express,kos中，中间件是指位于请求与响应中间，它可以对请求和响应拦截，拦截下来可以对请求和响应进行操作（增强）。

中间件的本质就是一个函数，在redux中，中间件可以对要派发的action进行增强，你本来redux不能处理异步的action，现在使用一个中间件就可以处理异步的action

redux中的中间件不需要我们写，有一些人都写好，直接使用。其中有一个叫redux-thunk。


在redux中有一个方法，叫applyMiddleware，可以中第三的中间件放到applyMiddleware中的。
代码写到创建仓库的地方。

如果你有异步的操作，你需要定义两个action creator。一个是同步的action creator，另一个是异步的action creator。

