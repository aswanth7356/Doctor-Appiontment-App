import React,{Children, createContext,useState} from 'react'


export const editResponseContext=createContext("")


function ContextShare() {

    const [editResponse,setEditResponse]=useState("")


  return (
    <>
     <editResponseContext.Provider value={{editResponse,setEditResponse}}>
        {Children}
     </editResponseContext.Provider>
    </>
  )
}

export default ContextShare 
