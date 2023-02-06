import { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const checkAdmin = ()=>{
        
    }
    const loginUser = (Token) => {
        setIsAuth(true);
        setToken(Token);
    }
    const logOutUser = () => {
        setIsAuth(false);
        setToken(null);
    }
    return (
        <AuthContext.Provider value={{ isAuth, token, loginUser, logOutUser }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthContextProvider;
