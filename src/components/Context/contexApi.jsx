import { createContext, useState } from "react";

export const ContextApi = createContext({});

function ContextProvider({ children }) {

    const [projeto, setProjeto] = useState('');


    return (
        <ContextApi.Provider value={{ projeto, setProjeto}}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;