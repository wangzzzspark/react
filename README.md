# redux react-redux redux-toolkit自练

以为只有青春兵荒马乱  到头来还是马不停蹄的向前 马不停蹄的错过 
 考上大学，毕业，上岸，并不会一切变好  自然结婚了也不会
聪明点 人生都是无数个当下组成 没有那么多观众 所以就大胆点 

## redux

首先要明白了解它是一个状态管理工具，三方库， 不仅仅只是提供给react。解决了react 数据单项流以及组件层级过深，兄弟组件之前传值（传递状态）代码冗余以及不好管理。
提供了三个方法 subscrible dispatch createStore getState三个方法
### createStore
用户定义初始值state，以及reducer纯函数 用户不能直接修改state的状态，只能通过action 调用reducer修改state的状态
### dispatch
通过store对象提供的 dispatch方法 调用reducer 。修改state里面的状态
### getState
如同单词的含义，提供getState的方法 返回当前state的值
### subscrible
故名思义 提供一个订阅者方法，讲传入的毁掉函数推到listener数组里面，当dispatch调用数据改变师，会执行订阅者传入的回调函数，比如在react类组件里面，会在页面加载之前订阅，回调函数传入forceupdate函数，这样state数据改变，就会让页面及时刷新 获取到最新的state，subscribe返回值是取消订阅的函数。执行会讲当前listener从listeners数组中过滤掉。

## react-redux
react-redux 专门提供给react的状态管理工具
在类组件的时候 主要提供provider 和 connect方法
connect方法其实就是一个高阶组件，通过mapStateToProps以及mapDispatchToProps将state 以及reducer链接到当前组件的props里面（mapState可以拿到state 处理后return出去 mapdisptch可以拿到store的dispatch）

函数组件： 当hook 出现后， 有了useDispatch() useSelector()方法  
useDispatch返回值其实就是redux中store的dispatch方法，
而useSelector其实就是将store.getState()传给selector的入参，并且订阅store的subscribe 当数据发生变化的时候，forceupdate刷新。
而provdier 类似createContext将store用context.provider传递给子组件


## @reduxjs/toolkit

其实就是提供了createSlice，configureStore 新的俩个新的api

### createSlice
接受
name--> 顾名思义
initalState--> 顾名思义
reducers ： 里面定义reduce方法 ，由当前slice.actions暴露出去

### configureStore
返回值就是store 接受各个切片slice

取值还是用react-redux种的 useDispatch（） useSelector

要注意的是state是总的state对象，具体取值可以取到具体某个slice
