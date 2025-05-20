import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


    // Observer for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        };
    }, [auth]);

    const handleLogout = () =>{
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    handleLogout,
    loginUser
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
