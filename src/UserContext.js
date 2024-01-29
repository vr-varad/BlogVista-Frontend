import {createContext, useState} from 'react'

export const  UserContext = createContext({})
export const Mode =  createContext({})
export const Search = createContext('')


export function UserContextProvider({children}){
    const [userInfo,setUserInfo] = useState({})
    const [mode,setMode] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <UserContext.Provider value={{userInfo,setUserInfo}}>
        <Mode.Provider value={{mode,setMode}}>
            <Search.Provider value={{searchTerm, setSearchTerm}}>
           {children}
           </Search.Provider>
        </Mode.Provider>
    </UserContext.Provider>)
}
