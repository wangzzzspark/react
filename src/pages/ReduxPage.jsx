import React, { Component } from 'react'
import { store } from '../store/index'
export default class ReduxPage extends Component {

    componentDidMount(){
        this.unSubscribe = store.subscribe(() => {
            this.forceUpdate()
        })
    }

    render() {
        return (
            <div>
                <h3>
                    redux use expamle
                </h3>
                <div>
                    <h4>
                   	count: {store.getState().count}     
                    </h4>
                    <button onClick={() => {store.dispatch({type:"decrement"})}}>decrement</button>
                    <button onClick={() => {store.dispatch({type:"increment"})}}>increment</button>

                </div>
            </div>
        )
    }
}