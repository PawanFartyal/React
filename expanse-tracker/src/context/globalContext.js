import React,{createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";
const intialState = {
  transactions: [ ],
};
const GlobalContext = createContext();
function GlobalProvider({children}){
    const [state, dispatch] = useReducer(AppReducer, intialState);
    function addTranasaction(transaction){
           dispatch({ type: "ADD_TRANSACTION", payload: transaction }); 
    }
    function deleteTranasaction(id){
         dispatch({type:'DELETE_TRANSACTION',payload:id})
    }
    return (
      <GlobalContext.Provider value={{transactions:state.transactions,addTranasaction,deleteTranasaction}}>
        {children}
      </GlobalContext.Provider>
    );
}
export {GlobalProvider,GlobalContext}; 
