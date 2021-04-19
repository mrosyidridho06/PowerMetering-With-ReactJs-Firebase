import React, { useContext, useState, useEffect, useRef } from "react";
import {auth} from "./fire";
import app from '../config/fire'
import firebase from 'firebase'
import { Redirect, useHistory } from 'react-router-dom';


const AuthContext = React.createContext()

const googleprovider = new firebase.auth.GoogleAuthProvider()

export const SignInWithGoogle = () => {
  auth.signInWithPopup(googleprovider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)


  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }


  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function nama(displayName) {
    return auth.displayName(displayName)
  }


  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function verifyEmail(email) {
    return currentUser.sendEmailVerification(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    verifyEmail,
    nama
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// export function useAuth(){
//   return useContext(AuthContext)
// }

// export function AuthProvider({children}) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)
// }
// function login(email, password) {
//   return auth.signInWithEmailAndPassword(email, password)
// }

// function logout() {
//   return auth.signOut()
// }

// function resetPassword(email) {
//   return auth.sendPasswordResetEmail(email)
// }

// function updateEmail(email) {
//   return currentUser.updateEmail(email)
// }

// function updatePassword(password) {
//   return currentUser.updatePassword(password)
// }
// useEffect(() => {
//   app.auth().onAuthStateChanged((user) => {
//     setCurrentUser(user)
//     setPending(false)
//   });
// }, []);

// if(pending){
//   return <>Loading...</>
// }
