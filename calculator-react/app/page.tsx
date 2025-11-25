'use client'

import Image from "next/image";
import { useState } from "react";

export default function Calculator() {

  const [Input, setInput] = useState("");

  // Function to show the digits on the screen
  const handleDigits = (n:number | string ) => {
    setInput(prev => prev + n);
  }
  // Function to handle operator signs
  const handleOperator = (i:string | number) => {  
    setInput( prev => prev + i);
  }
  
  // Function to clean Input value
  const removeInput = () => {
    setInput("");
  }

  // Function to handle calcul ..
  const handleCalcul = () => {
    try {
      const result =  Function(`"use strict"; return (${Input})`)();
      setInput(String(result));
    } catch {
      setInput("Erreur")
    }

  }

  return (

    <div className="flex min-h-screen justify-center items-center">
      <div className=" relative rounded-lg  h-67 w-55  bg-[#222222] ">
          
          <div className="  flex items-center justify-center rounded-sm mt-3 pointer-events-none h-10 bg-[#474747]"> {/* Input div. */}

          <input 
           type="text" 
           value={Input} 
           readOnly 
           className=" h-12 text-2xl p-5 rounded-lg text-center text-white shadow-inner"
           />  

          </div>
           {/* Main button calc */}
          <div className="grid-cols-3 w-40 grid gap-0 mt-2">
            {[1,2,3,4,5,6,7,8,9,0].map(n => ( // Map to display number
              <button
              key={n}
              className="boutonCalc"
              onClick={() => handleDigits(n)}
              >
              {n}
              </button>


            ))}
          <button className="boutonSet" onClick={() => handleOperator('-')}>-</button>
          <button className="boutonSet" onClick={() => handleOperator('/')}>/</button>
          </div>


          <div className="flex flex-col absolute right-2 top-15 ">
             <button 
          className="boutonSet"
          onClick={removeInput}>
            AC
          </button>

          <button className="boutonSet" onClick={() => handleOperator('+')}>+</button>
          <button className="boutonSet" onClick={() => handleOperator("*")}>*</button>

          <button className="boutonSet" onClick={handleCalcul}>=</button>
        </div>

      </div>
    </div>
  );
}
