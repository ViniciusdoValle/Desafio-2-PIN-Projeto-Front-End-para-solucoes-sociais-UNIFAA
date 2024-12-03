import React from 'react';

const Consultas = ({ transactions }) => {
  const totalPagar = transactions
    .filter((t) => t.tipo === 'pagar')
    .reduce((acc, t) => acc + t.valor, 0);

  const totalReceber = transactions
    .filter((t) => t.tipo === 'receber')
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = totalReceber - totalPagar;
  const estaNoVermelho = saldo < 0;

  return (
    <div>
      <h2>Consultas de Saldos</h2>
      <p>Total a Pagar: R${totalPagar.toFixed(2)}</p>
      <p>Total a Receber: R${totalReceber.toFixed(2)}</p>
      <p>Saldo: R${saldo.toFixed(2)}</p>
      <p style={{ color: estaNoVermelho ? 'red' : 'green' }}>
        {estaNoVermelho ? 'Você está no vermelho!' : 'Você está no azul!'}
      </p>
    </div>
  );
};

export default Consultas;
