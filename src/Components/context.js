import React,{createContext,useState} from 'react'




export const mycontext=createContext()

export const Myprovider=({children})=>{
    const [value,setvalue]=useState('hello')

    return (
        <mycontext.Provider value={{value,setvalue}}>
{children}

        </mycontext.Provider>
    )
}