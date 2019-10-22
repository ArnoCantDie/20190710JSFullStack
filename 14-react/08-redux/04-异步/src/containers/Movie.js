import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../actions/films"

class Movie extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount(){
        this.props.getFilms();
    }
    render() {
        return (
            <div>
                <h2>电影列表</h2>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        films:state.films
    }
}
// 把dispatch方法也映射到Counter组件上
function mapDispatchToProps(dispath){
    return bindActionCreators(actions,dispath)
}

// 第1个小括号中就写两个映射方法，名字自己定
export default connect(mapStateToProps,mapDispatchToProps)(Movie);