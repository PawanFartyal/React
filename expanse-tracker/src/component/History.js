import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext';
export const History = () => {
    const { transactions} = useContext(GlobalContext);
    const transaction=transactions.map((item=>{
        return(
         <Item key={item.id} id={item.id} text={item.text} amount={item.amount}/>);
    }))
    const empty=<h4>No History</h4>
  return (
    <div className="history">
      <h4>History</h4>
      <div className="line"></div>
      { transaction.length?transaction:empty}
    </div>
  );
}
function Item(props){
  const {deleteTranasaction }=useContext(GlobalContext)
   function clickHandler(){
       deleteTranasaction(props.id);
   }
    const style={
        backgroundColor:parseInt(props.amount)>0?"green":"red",
    }
    return (
      <div className="item" onClick={clickHandler}>
        <button>
          delete
        </button>
        <h4>{props.text}</h4>
        <h4>{props.amount}</h4>
        <div className="highlight" style={style}></div>
      </div>
    );
}