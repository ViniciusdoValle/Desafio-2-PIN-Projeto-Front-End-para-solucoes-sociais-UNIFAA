import React, { useState } from 'react';

const Cadastro = ({ onAddTransaction }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('pagar');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descricao || !valor) {
      alert('Preencha todos os campos.');
      return;
    }

    const novaTransacao = {
      descricao,
      valor: parseFloat(valor),
      tipo,
    };

    onAddTransaction(novaTransacao);

    setDescricao('');
    setValor('');
    setTipo('pagar');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Transação</h2>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="pagar">Débito</option>
        <option value="receber">Crédito</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Cadastro;
