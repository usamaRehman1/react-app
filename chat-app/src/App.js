import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from './component/common'
import { SingIn } from './store/action/userAction'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
  return (
    <div>
      <NavBar auth={this.props.Auth.authentication} />
      <div className="main-container">
        <h1>Welcome To Chat App</h1>
        <button className="btn btn-primary" onClick={() => this.props.SingIn(this.props)}>Sing in With Facebook</button>
      </div>
    
    </div>
  );
}
}

const mapStateToPropes = (state) => ({
  Auth : state.Auth
})

const mapDispatchToProps = (dispatch) => ({
  SingIn : (props) => dispatch(SingIn(props))
})
export default connect(mapStateToPropes, mapDispatchToProps)(App)

