import React from "react"
import {connect} from "react-redux"
import {TypeRootState} from "../../store/reducers"
import { TypeHome, Slider } from '../../store/reducers/home';
import actions from "../../store/actions/home"
import { RouteComponentProps } from "react-router"
import HomeHeader from './HomeHeader';
import HomeSliders from './HomeSliders';
import MovieLists from "./MovieLists"
interface State{

}
type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams{};
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children ?: any
}

class Home extends React.Component<Props,State>{
    homeContainerRef:any
    movieListRef:any
    constructor(props:Props){
        super(props)
        this.homeContainerRef = React.createRef();
        this.movieListRef = React.createRef();
    }
    render(){
        return(
            <div>
                <HomeHeader
                    currentCategory = {this.props.currentCategory}
                    setCurrentCategory = {this.props.setCurrentCategory}
                ></HomeHeader>
                <div className="home-container" ref={this.homeContainerRef}>
                    <HomeSliders 
                        sliders={this.props.sliders}
                        getSliders = {this.props.getSliders}
                    ></HomeSliders>
                    <MovieLists
                        currentCategory = {this.props.currentCategory}
                        movies = {this.props.movies}
                        ref={this.movieListRef}
                        homeContainerRef = {this.homeContainerRef}
                        getMovies = {this.props.getMovies}
                    ></MovieLists>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state:TypeRootState):TypeHome=>state.home
export default connect(mapStateToProps,actions)(Home);





