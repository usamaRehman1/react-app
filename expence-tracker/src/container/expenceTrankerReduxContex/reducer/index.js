export const TransectionReducer = ((state , action) => {
    switch (action.type) {
        case "ADD TRANSECTION":
            return [action.payload , ...state]  
        default:
            return state
    }
})