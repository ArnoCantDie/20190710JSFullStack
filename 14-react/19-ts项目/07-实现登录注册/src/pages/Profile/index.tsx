import React from "react"
import { connect } from "react-redux"
import { TypeRootState } from "../../store/reducers"
import { TypeProfile } from "../../store/reducers/profile"
import actions from "../../store/actions/porfile"
import { RouteComponentProps } from "react-router"
import { Descriptions, Button, Alert } from 'antd';
import LOGIN_TYPES from '../../store/typing/login-types';

import NavHeader from "../../components/NavHeader"

type StateProps = ReturnType<typeof mapStateToProps>
type DispathProps = typeof actions;
interface Iparams { };
type RouteProps = RouteComponentProps<Iparams>;
type Props = StateProps & DispathProps & RouteProps & {
    children?: any
}

class Profile extends React.Component<Props>{
    state = { loading: false }
    async componentDidMount() {
        await this.props.validate();
    }
    render() {
        let { user } = this.props;
        let content;//里存放着要渲染的内容 
        if (this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
            return null;
        } else if (this.props.loginState === LOGIN_TYPES.LOGINED) {
            content = (
                <div className="user-info">
                    <Descriptions>
                        <Descriptions.Item label="用户名">{user.username}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{user.phone}</Descriptions.Item>
                        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
                    </Descriptions>
                    <Button type="danger"
                        onClick={async (event: any) => {
                            await this.props.logout();
                            this.props.history.push('/login');
                        }}
                    >退出登录</Button>
                </div>
            )
        } else {
            content = (
                <>
                    <Alert type="warning" message="当前未登录" description="亲爱的用户你好，你当前尚未登录，请你选择注册或者登录" />
                    <div style={{ textAlign: 'center', padding: '.5rem' }}>
                        <Button type="dashed" onClick={() => this.props.history.push('/login')}>登录</Button>
                        <Button type="dashed" style={{ marginLeft: '.5rem' }} onClick={() => this.props.history.push('/register')}>注册</Button>
                    </div>
                </>
            )
        }
        return (
            (
                <section>
                    <NavHeader history={this.props.history}>个人中心</NavHeader>
                    {content}
                </section>
            )
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(mapStateToProps, actions)(Profile);










