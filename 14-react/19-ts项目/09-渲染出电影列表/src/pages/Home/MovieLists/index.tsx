import React,{ReactNode} from "react"
import {Movies,Movie} from "../../../store/reducers/home"
import { Icon,Card } from "antd"
import { Link } from "react-router-dom"

interface Props{
    children?:ReactNode,
    movies:Movies,
    getMovies:any,
    homeContainerRef:any,
    currentCategory:string
}
export default class MovieLists extends React.Component<Props>{
    componentDidMount(){
        if(this.props.movies.list.length == 0){
            this.props.getMovies();
        }
    }
    render(){
        console.log("....",this.props.movies.list)
        return(
            <div className="movie-list">
                <h2>
                    <Icon type="menu" />
                    全部电影1
                    {/* {this.props.currentCategory == "all" ? "全部":this.props.currentCategory} */}
                </h2>
                {
                    this.props.movies.list.map((movie:Movie,index:number)=>(
                        <Link to={{pathname:"/profile"}} key={index}>
                            <Card
                                hoverable={true}
                                style={{width:"100%"}}
                                cover = {<img src={movie.poster} />}
                            >
                                <Card.Meta title={movie.title} 
                                    description={<span>{movie.order}</span>}
                                /> 
                            </Card>
                        </Link>
                    ))
                }
            </div>
        )
    }
}