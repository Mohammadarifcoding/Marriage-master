import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
   
    const [data, setData ] = useState([])
    useEffect(()=>{
        fetch('/ServiceData.json')
        .then(res => res.json())
        .then(value => setData(value))
    },[])

   const AuthInfo = {data}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;