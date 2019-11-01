import React from "react"
import {connect} from "react-redux"
import {TypeRootState} from "../../store/reducers"
import {TypeHome} from "../../store/reducers/home"
import actions from "../../store/actions/home"
import { RouteComponentProps } from "react-router"

// StateProps = {number:number}
// 合并Home组件中传入所有的数据的数据类型
type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams{};
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children ?: any
}

class Home extends React.Component<Props>{
    render(){
        return(
            <div>
                home
            </div>
        )
    }
}
// {number:0}
let mapStateToProps = (state:TypeRootState):TypeHome=>state.home
export default connect(mapStateToProps,actions)(Home);





