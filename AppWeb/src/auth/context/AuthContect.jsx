import React, {useEffect, useState} from 'react'
import {auth} from '../../firebase/firebase.confing'
import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'


export const authContext = createContext()
//console.log(authContext)
export const useAuth= () => {
    const context = useContext(authContext)
    //console.log(context)
    if(!context){
       // console.log("error al crear el context")
    }
    return context
    }
    
    export function AuthProvider({children}){
        const [user, setUser] = useState("")
        useEffect(()=>{
            const suscribed = onAuthStateChanged(auth, (currentUser)=>{
                if(!currentUser){
                    //console.log(currentUser)
                    //console.log("no hay usuario suscrito")
                    setUser("")
                }else{
                    //console.log(currentUser)
                    //console.log("estoy registrado")

                   setUser(currentUser) 
                }
            })
            return () => suscribed()
        },[])

        const register = async(email,password) =>{
          const response= await createUserWithEmailAndPassword(auth,email,password)
          //console.log(response)
        }
        const login = async (email, password) =>{
            const response= await signInWithEmailAndPassword(auth,email,password)
            //console.log(response+"login")
        }

        const loginWithGoogle = async()=>{
             const responseGoogle= new GoogleAuthProvider()
            //console.log(auth)

             return signInWithPopup(auth, responseGoogle)
             
        }

        const logout = async() =>{
            const response = await signOut(auth)
            //console.log(response)
        }


        return (
        <authContext.Provider value={
            {
                register,
                login,
                loginWithGoogle,
                logout,
                user
            }}
            >
                {children}
                </authContext.Provider>
        )
    }