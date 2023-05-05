import React, { useContext, createContext, useReducer, useLayoutEffect } from 'react';
import { store } from '../store';
const Context = createContext({})

//need to confirm it , how to use it
const Provider = ({ store, children }) => {
    return (
    // what the fuck ? can get the component directly from here?
    <Context.Provider value={store}>
        {children}
    </Context.Provider>
    )
}

//为啥呀  需要确认
const useForceUpdate = () => {
    // const [, forceUpdate] = useReducer((state) => state + 1, 0)
    const [, forceUpdate] = useReducer((state) => state + 1, 0)

    return forceUpdate
}

const useStore = () => {
    return useContext(Context)
}

const useDispatch = () => {
    const store = useStore()
    const dispatch = store.dispatch
    return dispatch
}



// 函数接受一个函数参数 接受参数的函数能接收到state的值
const useSelector = (selector) => {
    const store = useStore()
    const getState = store.getState


    //为什么这里要订阅一下

    const forceUpdate = useForceUpdate()
    useLayoutEffect(() => {
        const unSubscribe = store.subscribe(() => {
            forceUpdate()
        })
        return unSubscribe
    }, [store])

    return selector(getState())
}


  

export { Provider, useDispatch, useSelector }