import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pwd, setPwd] = useState("")
  const [btnColor, setBtnColor] = useState('blue')

  //useRef hook
  const pwdRef = useRef(null)

  const copyPwd = useCallback(() => {
    setBtnColor('red')
    pwdRef.current?.select()
    //pwdRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(
      pwd)
  }, [pwd])

  const pwdGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}`~"
    setBtnColor('blue')
    for (let i = 1; i <= length; i++){
     let char = Math.floor(Math.random() * str.length +1)
     pass += str.charAt(char)
   }
   setPwd(pass)
  }, 
    [length, numAllowed, charAllowed, setPwd])
    

  useEffect(() => {
    pwdGenerator()
  }, [length, numAllowed, charAllowed, pwdGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center
      py-12 text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg
        overflow-hidden mb-4'>
          <input 
            type="text" 
            value={pwd}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={pwdRef}
          />
          <button 
            onClick={copyPwd}
            style={{backgroundColor: btnColor}}
            className='outline-non 
            text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id='numAllowed'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }} 
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='spCharAllowed'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} 
            />
            <label>Character</label>
          </div>
          
        </div>
        &nbsp;
      </div>
    </>
  )
}

export default App
