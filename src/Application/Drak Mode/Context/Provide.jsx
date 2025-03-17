import React, { useState } from "react";
import Context from "./Create"

const ProvideContext = ({ children }) => {
    const [light, dark] = useState(false)
    return (
        <Context.Provider value={{ light, dark }}>
            {children}
        </Context.Provider>
    )
}

export default ProvideContext