import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalStateProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
