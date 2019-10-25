import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    state = {number:0} 
    add = (event,msg)=>{
        console.log(msg)
        this.setState({number:this.state.number+1})
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                {/* <button onClick={this.add(event)}>加1</button> */}
                <button onClick={(event)=>this.add(event,100)}>加1</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, window.app)