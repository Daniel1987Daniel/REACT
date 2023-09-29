import { useState } from "react"
import dataBrac from '../dataBrac'
import dataPorec from "../dataPorec"

const Croatia = () => {

    const [renderBracImg, setRenderBracImg] = useState([dataBrac])
    const [renderPorecImg, setrenderPorecImg] = useState([dataPorec])

    const setBrac = () => {
        setRenderBracImg(dataBrac)
    }
    
    const setPorec = () => {
        setrenderPorecImg(dataPorec)
    }


    return (
        <div className='all-images'>
            <h1>WELCOME TO HOLIDAY APP</h1>
            {/* <h3>CLICK ON YOUR DESTINATION</h3> */}
            <ul onClick={setBrac}>
                <li>BRAČ</li>
            </ul>
            <ul onClick={setPorec}>
                <li>POREČ</li>
            </ul>
            <ul>
            {
                renderBracImg.map((item) => 
                    <div className="one-image">
                        <li key={item.id}>
                            <img src={item.img} alt="" width={550}/>
                            <h3>{item.description}</h3>
                            <h3>{item.price}</h3>
                        </li>
                    </div>
                )
            }
            </ul>
            <ul>
            {
                renderPorecImg.map((item) => 
                    <div className="one-image">
                        <li key={item.id}>
                            <img src={item.img} alt="" width={550}/>
                            <h3>{item.description}</h3>
                            <h3>{item.price}</h3>
                        </li>
                    </div>
                )
            }
            </ul>
            {/* <img src={renderBracImg} alt="" />
            <img src={renderPorecImg} alt="" /> */}
        </div>
    )
}

export default Croatia
