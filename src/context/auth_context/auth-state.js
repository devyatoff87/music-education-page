import { AuthContext } from "./auth-context";
import { useReducer } from "react"
import { authReducer } from "./auth-reducer";

const authInitValue = {
    status: true,
    id: null,
    name: "Vovchik"
}


const AuthContextWrapper = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, authInitValue)
    return (
        <AuthContext.Provider value={{ authState: authState, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextWrapper