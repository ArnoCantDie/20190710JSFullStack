import * as React from "react"
import {connect} from "react-redux"
import * as types from "../store/types"
import * as actions from "../store/actions/counter1"
interface Props{
    number:number,
    increment:any,
    decrement:any
}
class Counter1 extends React.Component<Props>{
    render(){
        return(
            <div>
                <div>{this.props.number}</div>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps = function(state:any):types.Counter1{
    return state.counter1
}
export default connect(mapStateToProps,actions)(Counter1);