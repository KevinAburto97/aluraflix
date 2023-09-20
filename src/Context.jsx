import React, {useState, createContext} from "react";
export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState([]),
    values = {
        user,
        login(user){
            setUser(user)
        }
    }
    return (<UserContext.Provider value={values}>{children}</UserContext.Provider>)
}

export default UserProvider