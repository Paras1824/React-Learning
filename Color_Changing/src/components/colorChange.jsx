import { useState } from "react"

function ColorChange(){
    const [color, setColor] = useState("aqua")

    return(
        <div className="w-full h-screen duration-200" style={{ backgroundColor : color}}>
            {/* <h1>Rang Is Working</h1> */}
            <div className="flex fixed flex-wrap justify-center bottom-14 inset-x-0 px-2   ">
                <div className="flex flex-wrap gap-3 justify-center shodow-lg  px-3 py-2 rounded-3xl" >
                    <button onClick={() => setColor("red")}
                    className="outline-none px-4  py-1 rounded-full text-white border-2 "style={{backgroundColor : "red"}} >
                        Red
                    </button>
                    <button onClick={() => setColor("Blue")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "blue"}} >
                        Blue
                    </button>
                    <button onClick={() => setColor("Green")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "green"}} >
                        Green
                    </button>
                    <button onClick={() => setColor("aqua")}
                    className="outline-none px-4 py-1 rounded-full text-black border-2"style={{backgroundColor : "aqua"}} >
                        Aqua
                    </button>
                    <button onClick={() => setColor("Olive")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "olive"}} >
                        Olive
                    </button>
                    <button onClick={() => setColor("black")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "black"}} >
                        Black
                    </button>
                    <button onClick={() => setColor("gray")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "gray"}} >
                        Gray
                    </button>
                    <button onClick={() => setColor("white")}
                    className="outline-none px-4 py-1 rounded-full text-black border-2"style={{backgroundColor : "white"}} >
                        White
                    </button>
                    <button onClick={() => setColor("purple")}
                    className="outline-none px-4 py-1 rounded-full text-white border-2"style={{backgroundColor : "purple"}} >
                        Purple
                    </button>
                    <button onClick={() => setColor("pink")}
                    className="outline-none px-4 py-1 rounded-full text-black border-2"style={{backgroundColor : "pink"}} >
                        Pink
                    </button>
                    <button onClick={() => setColor("yellow")}
                    className="outline-none px-4 py-1 rounded-full text-black border-2"style={{backgroundColor : "yellow"}} >
                        Yellow
                    </button>
                    <button onClick={() => setColor("Lavender")}
                    className="outline-none px-4 py-1 rounded-full text-black border-2"style={{backgroundColor : "Lavender"}} >
                        Lavender
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ColorChange