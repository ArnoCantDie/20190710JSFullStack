import React from "react"
import ReactDOM from "react-dom"

// 受控与非受控
// 受react控制 

// 我们可以通过ref得到真实的dom，然后根据dom得到dom中的内容，说白了，我们是操作了真实的dom

// 现在我们就要把框中的值作为状态，交给react来控制。
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.res = React.createRef();
        this.state = {
            num1:10,
            num2:10
        }
    }
    handleChange = (event)=>{
       console.log(event.target.dataset.name)  //event.target.value
        this.setState({
            [event.target.dataset.name]:parseFloat(event.target.value)
        })
    }
    render(){
        return(
            <div>
                {/* <input ref={this.num1} value={this.state.num2} readOnly />+<input ref={this.num2} value={this.state.num2} readOnly/><button onClick={this.add}>=</button><input ref={this.res} /> */}
                <input type="number" data-name="num1" ref={this.num1} value={this.state.num1} onChange={this.handleChange} />+
                <input type="number" data-name="num2" ref={this.num2} value={this.state.num2} onChange={this.handleChange}/>
                <button onClick={this.add}>=</button>
                <input ref={this.res} readOnly value={this.state.num1+this.state.num2} />
            </div>
        )
    }
}

ReactDOM.render(<Counter />, window.app)


// Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.