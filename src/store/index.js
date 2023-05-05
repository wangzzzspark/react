// import { createStore } from "redux";
import { createStore } from '../myLib/redux'

//理解不了这里为什么穿个默认值  createStore 怎么拿到或者赋值给initState这个值  擦
let reducer = (state={count: 1}, action) => {
    const {type, payload} = action
    if(type === "increment"){
        return {count: ++ state.count}
    }
    if(type === 'decrement'){
        return {count: -- state.count}
    }
    return state
}
 
export const store = createStore(reducer,{count :1 })