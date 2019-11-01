import React from "react"
import {connect} from "react-redux"
import {TypeRootState} from "../../store/reducers"
import {TypeProfile} from "../../store/reducers/profile"
import actions from "../../store/actions/porfile"
import { RouteComponentProps } from "react-router"

type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams{};
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children ?: any
}

class Profile extends React.Component<Props>{
    render(){
        return(
            <div>
                Profile
            </div>
        )
    }
}
let mapStateToProps = (state:TypeRootState):TypeProfile=>state.profile
export default connect(mapStateToProps,actions)(Profile);










