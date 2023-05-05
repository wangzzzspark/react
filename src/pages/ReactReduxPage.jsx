import React from 'react';
import { connect } from 'react-redux';
const ReactReduxPage = (props) => {
    const { count ,decrement, increment} = props
    return (<>
        <>

            <h3>
                ReactReduxPage
            </h3>
            <h4>
                count : {count}
            </h4>
            <button onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>decrement</button>
        </>

    </>)
}
const mapStateToProps = (state, ownProps) => {
    //这里就是承上启下 链接了组件了store  return 出去的值就是添加到组件props的值
    return { count: state.count }
}
const mapDispatchToProps = (dispatch) => {
    //把dispatch方法传到当前组件的props里面
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)