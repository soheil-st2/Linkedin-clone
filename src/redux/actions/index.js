import { auth, provider } from '../../firebase/firebase-config'
import { SET_USER } from './actionType'


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload
})
export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            // console.log(payload.user);
            dispatch(setUser(payload.user))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUser(user));
            }
        })
    }
}

export function signoutAPI() {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                dispatch(setUser(null))
            })
            .catch(error => {
                console.log(error.message);
            })
    } 
}




