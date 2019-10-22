
安装redux和react-redux:
    npm i redux react-redux -S

react-redux中提供了一个方法，叫connect方法，这个方法就可以把redux中状态映射到react中的某个组件中，如果映射成功了，这个组件就变成了智能组件，所谓的智能组件就是这指这个组件中有状态。

connect表示连接，你可以当成，是把redux和react连接起来，这里的连接是指把redux中的某个状态，连接到react中的某个组件上，也就是我们说的把
redux中的状态映射到react中的某个组件让，这个组件变成智能组件。

你想让哪个组件变成智能组件就在哪个组件上使用react-redux。


