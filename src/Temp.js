import React from 'react'
import Style from './Temp.module.css';
import Img1 from './asset/mobile.png'
import { useState } from 'react';
const Temp = () => {
    const [temp,setTemp] = useState(12);
    const [color,setColor] = useState("");
    const plushHandle = ()=>
    {

      setTemp((prev)=>{
            const newTemp = prev+1;
            if(newTemp>=19)
            {
                setColor("red");
            }
            return newTemp;
      })
    }
    const minusHandle = ()=>
    {
        setTemp(temp-1);
        if(temp<=19)
        {
            setColor("")
        }
    }
  return (
    <div className={Style.con}>
        {console.log("new Temp",temp)
        }
        <img src={Img1}/>
        <div className={Style.circle} style={{backgroundColor:color}}>
            {temp} c
        </div>
        <div className={Style.btnCon}>
            <button onClick={plushHandle}>+</button>
            <button onClick={minusHandle}>-</button>
        </div>
    </div>
  )
}

export default Temp