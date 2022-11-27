import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/globalContext'

export const NewTransaction = () => {
     const [text,setText]=useState("");
     const [amount,setAmount]=useState('');
     const { addTranasaction } = useContext(GlobalContext);
     function changeText(e){
      setText(e.target.value);
     }
     function changeAmount(e){
      setAmount(e.target.value);
     }
     
     function submitHandler(e){
      e.preventDefault();
      const newtransaction={
        id:Math.random()*1000,
        text:text,
        amount:amount,
      } 
      if(!text && !amount) return
      addTranasaction(newtransaction); 
      setText('');
      setAmount('');
     }

  return (
    <div className='new-transaction'>
        <h4>Add new transaction</h4>
        <div className='line'></div>
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="text">
                <h4>Text</h4></label>
            <input type="text" className='text' value={text} onChange={changeText} placeholder='Enter text...'/>
             <label htmlFor="amount">
                <h4>Amount</h4>
                <p>(negative-expanse,positve-income)</p>
             </label>
            <input type="text"placeholder='Enter amount...' value={amount} onChange={changeAmount} className='amount'/>
            <button>Add transaction</button>
        </form>
    </div>
  )
}
