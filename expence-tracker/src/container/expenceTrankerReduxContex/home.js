import React from 'react';
import Child from './child/index';
import { TransectionProvider } from './contex/index';

function ExpenceTrackerReduxContex() {

    return (
        <TransectionProvider>
            <Child />
        </TransectionProvider>
    )
}

export default ExpenceTrackerReduxContex;