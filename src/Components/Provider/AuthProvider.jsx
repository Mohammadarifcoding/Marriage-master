import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import auth from './../../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
    const [data, setData ] = useState([])
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('/ServiceData.json')
        .then(res => res.json())
        .then(value => setData(value))
    },[])
  
     const creatUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     } 

     const OUT = ()=>{
        setLoading(true)
        return signOut(auth)
     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

            setUser(currentUser)
            setLoading(false)
            console.log('Ovserving',currentUser)
        })
        return ()=>{
            unsubscribe()
        }
     },[])

     const Google = ()=>{
        const provider = new GoogleAuthProvider()
        setLoading(true)
        return signInWithPopup(auth,provider)
     }

     const update = (name,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
        displayName:name,photoURL:photo
        })
    }

    const In = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

   const AuthInfo = {data , loading ,user, creatUser , OUT , Google , update , In }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;