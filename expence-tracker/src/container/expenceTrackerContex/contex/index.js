import { createContext } from "react";

const INITIALSTATE = {
    initialTransection:[
        {
            desc:"Cash",
            amount:200,
        },
        {
            desc:"Book",
            amount:-40,
        },
        {
            desc:"Camera",
            amount:20,
        },
    ],
    checkedArr : [],
}

export const TransectionContext = createContext(INITIALSTATE);