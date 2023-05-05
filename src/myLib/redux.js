export function createStore(reducer,initState,enhancer){
    if( typeof initState == "funciton" && enhancer ==='undefined'){
        enhancer=initState
        initState = undefined
    }
    if(typeof enhancer !=='undefined'){
        if(typeof enhancer !== 'funciton'){
            throw new Error("Expected the enhancer to be a funciton")
        }
        return enhancer(createStore)(reducer,initState)
    }
    if(typeof reducer !== 'function'){
        throw new Error("Dear little beer , pleser use a funtion for reducer , ok? expacted the reducer to be a function")
    }

    let currentReducer = reducer
    let currentState = initState
    let currentListeners = []
    let lock = false

    function getState () {
        if(lock){
            throw new Error("wrong progess , little pussy,reducer is progress , do not let getState and reducer work at the same time")
        }
        return currentState
    }

    function subscribe(listenr){
        if(typeof listenr !== 'function'){
           throw new Error("listener should  be a function , not your stupid type")
        }
        currentListeners.push(listenr)
        //取消订阅 一般在CWUM 钩子里面写 就是组件销毁的时候写
        return () => {
            currentListeners = currentListeners.filter(item => {
                return item !== listenr
            })
        }
        
    }

    function dispatch (action) {
        try{
            lock = true
        currentState = currentReducer(currentState,action)
        }finally{
            lock = false
        }
        currentListeners.forEach(item => item())
    }

    dispatch({ type: '123123' })
    return {subscribe , getState, dispatch}
} 

