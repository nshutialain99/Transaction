import React, { useState } from 'react';
import './App.css';
import './transaction.jsx'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [action, setAction] = useState('send');
  const [amount, setAmount] = useState('');

  const addTransaction = () => {
    if (!name || !password || !amount) {
      alert('Please enter valid transaction details.');
      return;
    }
    const newTransaction = { name, password, action, amount };
    setTransactions([...transactions, newTransaction]);
    // Clear input fields
    setName('');
    setPassword('');
    setAmount('');
  };

  const searchTransactions = (searchInput) => {
    const filteredTransactions = transactions.filter(transaction => {
      return transaction.name.toLowerCase() === searchInput.toLowerCase() ||
             transaction.password.toLowerCase() === searchInput.toLowerCase() ||
             transaction.action.toLowerCase() === searchInput.toLowerCase();
    });
    return filteredTransactions;
  };

  return (
    <div className="App">
      <h1>Transaction History</h1>
      <div id="transactionForm">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="send">Send</option>
          <option value="receive">Receive</option>
        </select>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <input type="text" id="searchInput" placeholder="Search by Account or Action" />
      <button onClick={() => {
        const searchInput = document.getElementById("searchInput").value.trim();
        setTransactions(searchTransactions(searchInput));
      }}>Search</button>
      <table id="transactionTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Action</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.name}</td>
              <td>{transaction.password}</td>
              <td>{transaction.action}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
