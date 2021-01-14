import React from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import App from '../App';
import ChatApp from '../component/chatApp'

export class ReactRouter extends React.Component {

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/chatApp" component={ChatApp} />
                    <Route exact path="*" component={() => <h2>Sever Not Found 404 Error</h2>}/>
                </Switch>
            </Router>
        )
    }

}