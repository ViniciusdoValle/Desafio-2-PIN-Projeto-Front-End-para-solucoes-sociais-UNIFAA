import React, { useState } from 'react';
import Cadastro from './components/Cadastro';
import Consultas from './components/Consultas';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction, index) => index !== id));
  };

  const editTransaction = (id, updatedTransaction) => {
    setTransactions(
      transactions.map((transaction, index) =>
        index === id ? updatedTransaction : transaction
      )
    );
  };

  return (
    <div>
      <h1>Controle de Gastos</h1>
      <Cadastro onAddTransaction={addTransaction} />
      <Consultas transactions={transactions} />
      <div>
        <h3>Transações Cadastradas</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.descricao} - R${transaction.valor.toFixed(2)} -{' '}
              {transaction.tipo === 'pagar' ? 'Débito' : 'Crédito'}
              <button onClick={() => deleteTransaction(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
