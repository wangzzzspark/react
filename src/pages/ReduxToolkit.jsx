
import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from '../store/reduxToolkit/index'
const ReduxToolkit = () => {
    const count = useSelector(state => {
        console.log(state.counter)
        return state.counter.count
    })
    const dispatch = useDispatch()
    return (<>
        <h3>
            ReduxToolkit content
        </h3>
        <h4>
            count : {count}
        </h4>

        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=> dispatch(increment())}>increment</button>


    </>)
}

export default ReduxToolkit