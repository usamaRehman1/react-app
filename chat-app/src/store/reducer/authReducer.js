import ActionType from '../action/actionType'

const INITIALSTATE = {
    authentication : false ,
    currUser : {},
    users : [],
}

export default (state = INITIALSTATE , action ) => {
    
    switch (action.type) {
        case ActionType.setUser :
            return(
                {
                    ...state,
                    authentication : !state.authentication,
                    currUser : action.user,
                }
            )
        case ActionType.removeUser :
            return(
                {
                    ...state,
                    authentication : !state.authentication,
                    currUser : action.user
                }
            )

        case ActionType.setFirebaseUsers :
            return(
                {
                    ...state,
                    users : action.payload ,
                }
            )
        default:
            return state
    }
}