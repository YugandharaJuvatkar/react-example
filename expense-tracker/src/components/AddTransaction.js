import React,{useContext, useState} from 'react';
import { GlobalContext } from './../context/GlobalState';
import uuid from 'uuid/dist/v1';

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext); 

  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);

  const handleSubmit = e =>{
    e.preventDefault();

    const handleFunction = {
      id:uuid(),
      text,
      amount:+amount
    }

    addTransaction(handleFunction);
    setText('');
    setAmount('');
  }
    return (  
        <div>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Text</label>
            <input type="text" value={text} placeholder="Enter text..."  onChange={(e)=>setText(e.target.value)}/>
          </div>
          <div className="form-control">
            <label>Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount}  placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)} />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    );
}
 
export default AddTransaction;