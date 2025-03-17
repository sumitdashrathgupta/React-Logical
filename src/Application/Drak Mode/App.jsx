import React from 'react'
import Theam from "./Components/Theam"
import Provide from "./Context/Provide"

const App = () => {
    return (
        <Provide>
            <Theam />
        </Provide>
    )
}

export default App