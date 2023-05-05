import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {useDispatch, useSelector } from '../myLib/reactRedux'

const HookReactRedux = () => {
    const count = useSelector((state)=>{
        console.log(state)
        return state.count
    })
    const dispatch = useDispatch()
    return (<>
        <h3>
            Hook component use redux example
        </h3>
        <h3>
            count:{count}
        </h3>

        <button onClick={() => {dispatch({type:'increment'})}}>increment</button>
        <button onClick={() => {dispatch({type:'decrement'})}}>decrement</button>
    
    </>)
}

export default HookReactRedux