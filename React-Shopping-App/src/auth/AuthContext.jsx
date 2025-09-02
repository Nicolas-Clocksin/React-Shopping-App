import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within <AuthProvider>');
    return context;
}
