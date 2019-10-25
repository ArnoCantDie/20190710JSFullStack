import React from "react"
import ReactDOM from "react-dom"
class News extends React.Component{
    constructor(props){
        super(props)
        this.scrollRef = React.createRef();
    }
    state = {
        // news:["news6","news5","new4","news3","news2","new1"]
        news:[]
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({
                news:[`${this.state.news.length}`,...this.state.news]
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    // 获取更新之前dom的快照
    getSnapshotBeforeUpdate(){
        // console.log(this.scrollRef.current.scrollHeight)
        // 在getSnapshotBeforeUpdate中返回了一个值，这个值会给componedDidUpdate的最后一个参数
        return this.scrollRef.current.scrollHeight;
    }
    componentDidUpdate(prevProps,prevState,lastScrollHeight){
        // console.log(lastScrollHeight)
        // console.log(this.scrollRef.current.scrollTop)  // 0
        let scrollTop = this.scrollRef.current.scrollTop; 
        this.scrollRef.current.scrollTop = scrollTop+(this.scrollRef.current.scrollHeight-lastScrollHeight)
    }
    render(){
        let styles = {
            height:"100px",
            width:"200px",
            border:"1px solid red",
            overflow:"auto"
        }
        return(
            <ul style={styles} ref={this.scrollRef}>
               {
                   this.state.news.map((item,index)=><li key={index}>{item}</li>)
               }
            </ul>
        )
    }
}
ReactDOM.render(<News />, window.app)

