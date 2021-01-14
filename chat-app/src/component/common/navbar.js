import React from 'react'

export class NavBar extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <span className="navbar-brand">
                            CatChat 
                        </span>

                        <span>
                            {
                                (this.props.auth) ? (
                                    <div>
                                    <button
                                       className="btn btn-success" 
                                       onClick={() => this.props.handeleChangeUser()}>
                                       Logout
                                    </button>
                                    </div>
                                ) : (
                                   ""
                                )
                            }
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}