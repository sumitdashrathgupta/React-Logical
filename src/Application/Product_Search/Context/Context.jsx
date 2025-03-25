import  { createContext, useState } from "react";

export const CreateContext = createContext()

export const ProvideContext = ({ children }) => {
    const [Data, setData] = useState([])
    return (
        <CreateContext.Provider value={{ Data, setData }}>
            {children}
        </CreateContext.Provider>
    )
}

