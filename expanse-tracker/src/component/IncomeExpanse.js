import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

export const IncomeExpanse = () => {
  const transaction = useContext(GlobalContext).transactions;
  const amount = transaction.map((item) => parseInt(item.amount));
  const income = amount
    .filter((item) => {
      if (item > 0) return item;
    })
    .reduce((result, item) => {
      {
        return result + item;
      }
    }, 0).toFixed(2);
  const expanse=amount.filter(item=>{
    if(item<0) return item
  }
  ).reduce((result,item)=>{
    {
      return result+item; 
     }
  },0).toFixed(2);
  return (
    <div className="income-expanse">
      <div className="outline"></div>
      <div className="income">
        <h5>Income</h5>
        <h4 className="income-rupee">₹{income}</h4>
      </div>
      <div className="expanse">
        <h5>Expanse</h5>
        <h4 className="expanse-rupee">₹ {Math.abs(expanse)}</h4>
      </div>
    </div>
  );
};
