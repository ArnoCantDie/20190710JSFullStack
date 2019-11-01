import React from "react"
import {connect} from "react-redux"
import {TypeRootState} from "../../store/reducers"
import {TypeMime} from "../../store/reducers/mime"
import actions from "../../store/actions/mime"
import { RouteComponentProps } from "react-router"

type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams{};
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children ?: any
}

class Mime extends React.Component<Props>{
    render(){
        return(
            <div>
                Mime
            </div>
        )
    }
}
let mapStateToProps = (state:TypeRootState):TypeMime=>state.mime
export default connect(mapStateToProps,actions)(Mime);





