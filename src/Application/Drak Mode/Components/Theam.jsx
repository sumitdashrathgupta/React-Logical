import React, { useContext } from 'react'
import Context from "../Context/Create"
const Theam = () => {
    const { dark, light } = useContext(Context)
    const handleEvent = () => {
        dark(!light)
        console.log(light)
    }

    return (
        <div style={{ backgroundColor: light ? '#ffffff' : 'black', color: light ? '#000' : '#fff',width:'100%',height:'100vh',padding:0,margin:0}}>
            <button onClick={handleEvent}>
                {light ? 'Switch to Dark' : 'Switch to Light'}
            </button>
        </div>
    )
}

export default Theam
