import { Header } from './component/Header';
import './App.css';
import {Balance} from './component/Balance';
import {IncomeExpanse} from './component/IncomeExpanse'
import {History} from './component/History';
import { NewTransaction } from './component/NewTransaction';
import { useState } from 'react';
import {GlobalContext, GlobalProvider} from './context/globalContext'
function App() {
  const [text ,setText]=useState('');
  const [amount,setAmount]=useState('');

  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <IncomeExpanse />
        <History />
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
