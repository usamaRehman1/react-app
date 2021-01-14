import ActionType from '../action/actionType'
const INITIALSTATE = {
    chats : []
}

export default (state = INITIALSTATE , action) => {
    return state

    // switch (action.type) {
    //     case ActionType.setMessage :
    //         return (
    //             {
    //                 ...state,
    //                 chats : [...state.chats , action.newMessage]
    //             }
    //         )
    //     case ActionType.setFirebaseMessage:
    //         return (
    //             {
    //                 ...state,
    //                 chats : action.chats,
    //             }
    //         )
    //     default:
    //         return state
    // }
}