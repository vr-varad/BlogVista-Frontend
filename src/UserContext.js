import {createContext, useState} from 'react'

export const  UserContext = createContext({})
export const Mode =  createContext({})


export function UserContextProvider({children}){
    const [userInfo,setUserInfo] = useState({})
    const [mode,setMode] = useState(true)
    return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
        <Mode.Provider value={{mode,setMode}}>
           {children}
        </Mode.Provider>
    </UserContext.Provider>)
}
