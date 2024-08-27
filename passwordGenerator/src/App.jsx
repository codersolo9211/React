import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialcharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook

  const passwordRef = useRef(null);    //// it highlight the copied text just to provide user better experience

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+= "0123456789";
    if(specialcharacter) str+= "!@#$%^&*()[]~`;'";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      // Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
      // here character array index value arrirved but we have to get that value from that index.
      pass += str.charAt(char);
      
    }
    setPassword(pass);
  }, [length, number, specialcharacter, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()  // it highlight the copied text just to provide user better experience
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, number, specialcharacter,passwordGenerator])

  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>

    <div className="flex items-center mb-4">
      <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
      />
      <button  className='py-1 px-4 bg-orange-500 text-white rounded-r-lg'onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={8}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
        type='checkbox'
        id='numberInput'
        onChange={()=>{
          setNumber((prev)=>!prev);
          
        }}
        
        ></input>
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={specialcharacter}
          id='characterInput'
          onChange={()=>{setCharacter((prev) => !prev)
        }}
        ></input>
        <label htmlFor='characterInput'>Character</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
