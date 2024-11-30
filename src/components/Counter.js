import { useRef, useState } from "react";


export const Counter = () => {

    const[words, setWords] = useState(0)
    const [char, setChar] = useState(0)
    const textplace= useRef()
    const textChange=()=>{
        const text= textplace.current.value;
        setChar(text.length)
        text.length? setWords(text.trim().split(" ").length): setWords(0)
    }
   const  handleReset=()=>{
    textplace.current.value="";
    textChange()

   }

  return (
    <section  className="counter">
        <textarea placeholder="write your text, or paste here" onChange={textChange} ref={textplace} data-testid="textArea"name="wordplace"></textarea> 
        <button data-testid="clearBtn" disabled={char?"" : "disabled"} onClick={handleReset}>Clear Text Input</button>
        <p className="result"><span>Words: {words}</span></p>
        <p className="result"><span>Characters: {char}</span></p>     
    </section>
  )
}

