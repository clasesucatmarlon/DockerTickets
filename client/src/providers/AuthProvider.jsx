import { createContext, useEffect, useState } from "react";
import api from "../lib/Axios";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // CONSISTENCIA DE DATOS.  EVITAR QUE SE PIERDAN LOS DATOS UNA VEZ LOGUEADO
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token-tickets");
            if (!token) {
                setIsLoading(false); 
                return;
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            try {
                const {data} = await api.get("/users/session/session-user", config);
                setAuth(data);
            } catch (error) {
                setAuth({})
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])

    // CERRAR SESION
    const logout = () => {
        setAuth({});
        localStorage.removeItem("token-tickets");
    }


    return <AuthContext.Provider value={{ auth, setAuth, isLoading, logout }}>
        {children}
    </AuthContext.Provider>
}

export { AuthProvider };

export default AuthContext;