
<div class="container">
    <h1>Transaction History</h1>
   
    <div id="transactionForm">
      <input type="text" id="nameInput" placeholder="Name"/><br/>
      <input type="password" id="passwordInput" placeholder="Password"/><br/>
      <input type="number" id="amountInput" placeholder="Amount"/><br/>
      
      <select id="actionSelect">
        <option value="send">Send</option>
        <option value="receive">Receive</option>
      </select>  
      <button onclick="addTransaction()">Add Transaction</button>
    </div>
    <input type="text" id="searchInput" placeholder="Search by Account or Action"/>
    <button onclick="searchTransactions()">Search</button>
    <table id="transactionTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Action</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody id="transactionHistory"></tbody>
    </table>
  </div>