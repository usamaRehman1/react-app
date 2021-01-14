import ActionType from './actionType'
import Firebase from '../../config/firebase'
import firebase from 'firebase'

const SingIn = (props) => {
    return dispatch => {
        let history = props.history ;
        var provider = new firebase.auth.FacebookAuthProvider();
    
        firebase.auth().signInWithPopup(provider).then((result) => {
            var user = result.user;
    
            let currUser = {
                uid : user.uid,
                name : user.displayName,
                email : user.email,
                profileUrl : user.photoURL,
            }
            
            dispatch({ type : ActionType.setUser , user : currUser})
            firebase.database().ref("/").child(`users/${user.uid}`).set(currUser)
            .then( () => {
                alert("User Successully Login")
                history.push("/chatApp")
            })
        })
        .catch((error) => {
           var errorMessage = error.message;
           console.log(errorMessage)
        });

    }
}

const SingOut = (props) => {

    return dispatch => {
        firebase.auth().signOut().then(() => {
            dispatch({type : ActionType.removeUser , user : {}})
            props.history.push('/')
        }).catch((error) => {
            console.log("Message=>", error.message)
        });
    }

}

const getUserFromFirebase = () => {
    return dispatch => {
        let users = []
        firebase.database().ref('/').child('users').on('child_added', (data) => {
            users.push(data.val())
        })
        dispatch({type : ActionType.setFirebaseUsers , payload : users })
    }

}

export {
    SingIn,
    SingOut,
    getUserFromFirebase,
}
