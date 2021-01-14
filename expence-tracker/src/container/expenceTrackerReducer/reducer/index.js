export const initialTransection = {
    transection : [
        {
            desc:"Cash",
            amount: 500,
        },
        {
            desc:"Book",
            amount: -400,
        },
        {
            desc:"Camera",
            amount: -20,
        },
    ],
}

export const TransectionReducer = (state = initialTransection  , action) => {
    switch (action.type) {
        case "ADD TRANSECTION":
            return(
                {
                    ...state,
                    transection:[action.payload , ...state.transection],
                }
            );
            break;
        default:
            return state;
    }
}