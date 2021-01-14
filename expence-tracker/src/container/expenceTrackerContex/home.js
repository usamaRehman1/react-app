import React , { createContext , useState } from 'react';
import { Child } from './child/index';
import { TransectionContext } from './contex/index';


function ExpenceTrackerContext (){

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

    let contextState  = useState(INITIALSTATE);

    return(
        <TransectionContext.Provider value={contextState}>
            <Child />
        </TransectionContext.Provider>
    )
}

export default ExpenceTrackerContext;