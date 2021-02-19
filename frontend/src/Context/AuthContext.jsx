import { createContext, useState } from "react";
export const AuthContext = createContext();
function AuthContextProvider({ children }) {
    let role = localStorage.getItem('role') || '';
    let Tok = localStorage.getItem('token') || null;
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(Tok?Tok:null);
    const [isAdmin, setIsAdmin] = useState(role == 'admin' ? true : false);
    const checkAdmin = (value) => {
        setIsAdmin(value)
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
        <AuthContext.Provider value={{ isAuth, checkAdmin, isAdmin, token, loginUser, logOutUser }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthContextProvider;
