import React, { useState } from 'react';

const Cadastro = ({ onAddTransaction }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('pagar'); // 'pagar' ou 'receber'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descricao || !valor) return;

    const transaction = {
      descricao,
      valor: parseFloat(valor),
      tipo,
      data: new Date().toISOString(),
    };

    onAddTransaction(transaction);
    setDescricao('');
    setValor('');
  };

  return (
    <div>
      <h2>Cadastrar Débito ou Crédito</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="pagar">Débito (A Pagar)</option>
            <option value="receber">Crédito (A Receber)</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
