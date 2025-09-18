import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function PassGenrator() {
    const [length, setLength] = useState(8)
    const [num, setNum] = useState(false);
    const [char, setChar] = useState(false);
    const [password, setPassword] = useState("")
    const passRef = useRef(null)

    let passwordGenerator = useCallback(() =>{
        let pass = ""
        let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
        if(num){ str += "1234567890" }
        if(char){ str += "~!@#$%^&*()_[]}{:;,./?><" }

        for (let index = 1; index <= length; index++) {
            let abc = Math.floor(Math.random()*str.length + 1)
            pass += str.charAt(abc)
        }
        // console.log("abcd")
        setPassword(pass)

    } , [length, num, char, setPassword])

    const copyPassToClipboard = useCallback(() => {
        passRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])
    useEffect(() => {passwordGenerator()},[length, num, char, passwordGenerator])
  return (
    <>
        <div className=' w-full max-w-md mx-auto shadow-md rounded-3xl px-4 py-3 my-8 bg-gray-500 text-orange-500' >
            <h1 className='text-white text-3xl text-center '><b>Password Generator</b></h1>
            <br />
            <div className=' flex shadow rounded-3xl overflow-hidden mb-4 '>
                <input type="text" value={password} 
                className='outline-none w-full py-1 px-3' 
                placeholder='Password' readOnly
                ref={passRef} />
                <button className='outline-none bg-blue-800 cursor-pointer text-white px-3 py-1 shrink-1'
                onClick={copyPassToClipboard} >
                    copy
                </button>
            </div>
            <div className='flex text-sm gap-x-2' >
                <div className='flex items-center gap-x-1' >
                    <input 
                    type="range" min={6} max={25} value={length} 
                    className='cursor-pointer'
                    onChange={(e) => {setLength(e.target.value)}} />
                    <label> Length : {length}</label>
                    <br />
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox" value = {num}
                    className='cursor-pointer'
                    onChange={() => {
                        setNum((prev) => !prev);
                    } }
                    />
                    <label> Numbers </label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                    type="checkbox" value = {char}
                    className='cursor-pointer'
                    onChange={() => {
                        setChar((prev) => !prev);
                    } }
                    />
                    <label> Special Character </label>
                </div>
            </div>
        </div>
    </>
  )
}

export default PassGenrator
