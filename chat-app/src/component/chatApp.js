import React from 'react'
import Firebase from '../config/firebase'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { NavBar } from './common'
import { SingOut, getUserFromFirebase } from '../store/action/userAction'
import "./chatApp.css"

class ChatApp extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "",
            chatWithUser: null,
            chats: [],
            runSate : false,
        }
    }

    async componentDidMount() {
        await this.props.getUserFromFirebase()
    }

    handeleChangeUser = () => {
        this.props.SingOut(this.props)
    }

    sendMessage = () => {
        let curr_user = this.props.Auth.currUser;
        let chat_user = this.state.chatWithUser;
        let merge_uid = this.uid_merge(curr_user.uid, chat_user.uid)
        let time = this.getTime()

        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            message: this.state.message,
            name: curr_user.name,
            uid: curr_user.uid,
            time : time,
        })

        this.setState({ message: "" })
    }

    uid_merge(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }

    chatWithUser = (user) => {
        this.setState({ chatWithUser: user })

        let curr_user = this.props.Auth.currUser;
        let merge_uid = this.uid_merge(curr_user.uid, user.uid)

        this.getMessages(merge_uid)
    }

    getMessages = (merge_uid) => {
        firebase.database().ref("/").child(`chats/${merge_uid}`).on('child_added', (message) => {
            this.state.chats.push(message.val())
            this.setState({
                chats: this.state.chats,
            })
        })
    }

    getTime = () => {
        let time = new Date().toLocaleTimeString()
        return time
    }

    render() {
        let curr_user = this.props.Auth.currUser;
        let { chatWithUser, chats } = this.state;
        return (
            <div>
                <NavBar auth={this.props.Auth.authentication} handeleChangeUser={this.handeleChangeUser} />
                <div className="container-fluid">


                    <div className="row">
                        <div className="col-4 user_box">

                            <div className="currUser" style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                <img src={curr_user.profileUrl} alt="currUser profile" style={{ borderRadius: "98%", marginRight: 6 }} />
                                <h3>{curr_user.name}</h3>
                            </div>

                            <ul className="user-list" >
                                {
                                    this.props.Auth.users.map((userObj) => {
                                        return userObj.uid !== curr_user.uid &&
                                            <li className="row mt-2" key={userObj.uid} >
                                                <div className="col-2 user-profile">
                                                    <img src={userObj.profileUrl} alt={`${userObj.name} profile`} style={{ borderRadius: "98%", marginRight: 6 }} />
                                                </div>
                                                <div className="col-10 " style={{ display: "flex", justifyContent: "center", flexDirection: 'column', fontSize: 20, marginBottom: 5 }}>
                                                    {userObj.name}
                                                    <button className="btn btn-success" onClick={() => this.chatWithUser(userObj)}>Chat</button>
                                                </div>
                                            </li>
                                    })
                                }
                            </ul>
                        </div>

                        <div className="col-8 chat-container">
                            <div className="chat-box">
                                {
                                    (chatWithUser) ? (
                                        <div className="chatUserDetail">
                                            <img src={chatWithUser.profileUrl} alt="user image" style={{ borderRadius: "100%", width: 40, height: 40, marginRight: 6 }} />
                                            <h3>{chatWithUser.name}</h3>
                                        </div>
                                    ) : (
                                            <div onClick={() => this.setState({runSate : !this.state.runSate})}>
                                                No Chat Users...
                                            </div>
                                        )
                                }
                                <div className="chat-area">
                                    {
                                        this.state.chats.map((messageObj) => {
                                            return (
                                                <div key={messageObj.uid} className={`message-box ${(messageObj.uid === curr_user.uid) ? "darker" : ""}`}>
                                                    <img src={`${(messageObj.uid === curr_user.uid) ? curr_user.profileUrl :  chatWithUser.profileUrl}`} className={`${(messageObj.uid === curr_user.uid) ? "right" : ""}`} />
                                                    <p>{messageObj.message}</p>
                                                    <span className={(messageObj.uid === curr_user.uid) ? "time-left" : "time-right"}>{messageObj.time}</span>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </div>
                            {
                                this.state.chatWithUser ? (
                                    <div className="input-box">
                                        <div className="input-group flex-nowrap">
                                            <input type="text" className="form-control" placeholder="enter message..." value={this.state.message} onChange={(ev) => this.setState({ message: ev.target.value })} />
                                            <button className="btn btn-success input-group-text" onClick={() => this.sendMessage()} >send</button>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToPropes = (state) => ({
    Auth: state.Auth,
    users: state.Auth.users,
})

const mapDispatchToProps = (dispatch) => ({
    SingOut: (props) => dispatch(SingOut(props)),
    getUserFromFirebase: () => dispatch(getUserFromFirebase()),
})

export default connect(mapStateToPropes, mapDispatchToProps)(ChatApp)