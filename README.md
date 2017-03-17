# ReactJS

React 本身只涉及UI层。做大型应用一般需要搭配一个前端框架。
Facebook 官方使用 Flux框架。
Flux 是一个架构（类似MVC）。有多种实现方式。
Flux基本概念：（参考： <http://www.ruanyifeng.com/blog/2016/01/flux.html> ）
• View： 视图层
• Action（动作）：视图层发出的消息（比如mouseClick）
• Dispatcher（派发器）：用来接收Actions、执行回调函数
• Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面
Flux 一大特点单向数据流： view -> action->dispatcher->store->view


这里看git上比较流行的四种。
一：Facebook官方实现的Flux --> git: ReactFluxDemo
二：Alt Flux -->git: ReactAltFluxDemo todo
三：Reflux
Older ,跳过。
四：Redux -->git: ReactReduxFluxDemo todo
