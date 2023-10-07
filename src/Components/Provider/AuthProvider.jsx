import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import auth from './../../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
    const [data, setData ] = useState([])
    const [user,setUser] = useState(null)
    useEffect(()=>{
        fetch('/ServiceData.json')
        .then(res => res.json())
        .then(value => setData(value))
    },[])
  
     const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     } 

     const OUT = ()=>{
        return signOut(auth)
     }

     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('Ovserving',currentUser)
        })
        return ()=>{
            unsubscribe()
        }
     },[])

     const Google = ()=>{
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
     }

     const update = (name,photo)=>{
       return updateProfile(auth.currentUser, {
        displayName:name,photoURL:photo
        })
    }

    const In = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

   const AuthInfo = {data ,user, creatUser , OUT , Google , update , In }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;