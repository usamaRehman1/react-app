import { createContext, useReducer } from "react";
import { TransectionReducer } from '../reducer/index';

const initialTransection = [
    {
        desc:"Cash",
        amount:200,
    },
    {
        desc:"Book",
        amount:-50,
    },
    {
        desc:"Camera",
        amount:150,
    },
]

export const TransectiionContext = createContext(initialTransection);

export const TransectionProvider = ({children}) => {

    let [state , dispatch] = useReducer(TransectionReducer,initialTransection);

    function addTransection(transObj){

        dispatch({
            type:"ADD TRANSECTION",
            payload:transObj,
        })
    }

    return (
        <TransectiionContext.Provider value={{
            transection : state, 
            addTransection,
        }}>
            {children}
        </TransectiionContext.Provider>
    )
}