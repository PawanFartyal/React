import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext';

export const Balance = () => {
  const transaction=useContext(GlobalContext).transactions;
  const amount=transaction.map( value=>parseInt(value.amount))
  const balance=amount.reduce((result,item)=>result+item,0).toFixed(2);
  return (
    <div className='Balance'>
      <h5>Your Balance</h5>
      <h2>₹ {balance}</h2>
    </div>
  );
}
