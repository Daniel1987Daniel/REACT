import { useState } from "react"
import dataBrac from '../dataBrac'
import dataPorec from "../dataPorec"

const Croatia = () => {

    const [renderBracImg, setRenderBracImg] = useState([])
    const [renderPorecImg, setrenderPorecImg] = useState([])
    const [renderBracDescAndPrice, setRenderBracDescAndPrice ] = useState([])
    const [renderPorecDescAndPrice2, setRenderPorecDescAndPrice ] = useState([])

    const setBrac = () => {
        setRenderBracImg(dataBrac)
    }
    
    const setPorec = () => {
        setrenderPorecImg(dataPorec)
    }

    const renderDescAndPrice = () => {
        setRenderBracDescAndPrice(dataBrac)
    }

    const renderDescAndPrice2 = () => {
        setRenderPorecDescAndPrice(dataPorec)
    }

    return (
        <div>
            <div className="header">
                <h1>WELCOME TO HOLIDAY APP</h1>
                <ul onClick={setBrac}>
                    <li>BRAČ</li>
                </ul>
                <ul onClick={setPorec}>
                    <li>POREČ</li>
                </ul>
            </div>
            <div>
                <div className="all-images">
                    {
                        renderBracImg.map((item) => 
                            <div className="one-image">
                                <li key={item.id} onClick={renderDescAndPrice}>
                                    <img src={item.img} alt="" />
                                </li>
                            </div>
                        )
                    }
                    {
                        renderBracDescAndPrice.map((item) =>
                            <div className="one-image">
                                <h3>{item.name}</h3>
                                <h3>{item.description}</h3>
                                <h3>{item.price}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
            <div>
                <div className="all-images">
                    {
                        renderPorecImg.map((item) => 
                            <div className="one-image">
                                <li key={item.id} onClick={renderDescAndPrice2}>
                                    <img src={item.img} alt="" />
                                </li>
                            </div>
                        )
                    }
                    {
                        renderPorecDescAndPrice2.map((item) => 
                            <div className="one-image">
                                <h3>{item.name}</h3>
                                <h3>{item.description}</h3>
                                <h3>{item.price}</h3>
                            </div>
                        )
                    }
                </div>  
            </div>
        </div> 
    )
}

export default Croatia
