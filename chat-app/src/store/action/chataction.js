// import ActionType from './actionType'
// import Firebase from "../../config/firebase"
// import firebase from 'firebase'

// const setMessage = (user , message , merge_uid) => {

//     return dispatch => {
//         firebase.database().ref('/').child(`chats/${merge_uid}`).push({
//             message : message,
//             name : user.name,
//             uid : user.uid
//         })

//         dispatch({type : ActionType , newMessage : { name : user.name , uid : user.uid , message}})
//     }
// }

// const getMessageFromFirebase = () => {

//     return dispatch => {
//         let chats = []
//         firebase.database().ref("/").child("chats").on('child_added' , (message) => {
//             chats.push(message.val())
//         })

//         dispatch({type : ActionType.setFirebaseMessage , chats : chats})
//     }
// }

// export {
//     setMessage,
//     getMessageFromFirebase,
// }