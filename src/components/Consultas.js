import React from 'react';

const Consultas = ({ transactions }) => {
  // Cálculo total de débitos
  const totalPagar = transactions
    .filter((t) => t.tipo === 'pagar')
    .reduce((acc, t) => acc + t.valor, 0);

  // Cálculo total de créditos
  const totalReceber = transactions
    .filter((t) => t.tipo === 'receber')
    .reduce((acc, t) => acc + t.valor, 0);

  // Cálculo do saldo
  const saldo = totalReceber - totalPagar;

  // Verificar se há pelo menos um débito e um crédito
  const temPagar = transactions.some((t) => t.tipo === 'pagar');
  const temReceber = transactions.some((t) => t.tipo === 'receber');

  // Verificar se o saldo é negativo
  const estaNoVermelho = saldo < 0;

  return (
    <div>
      <h2>Consultas de Saldos</h2>
      <p>Total a Pagar: R${totalPagar.toFixed(2)}</p>
      <p>Total a Receber: R${totalReceber.toFixed(2)}</p>
      <p>Saldo Atual: R${saldo.toFixed(2)}</p>
      {temPagar && temReceber && estaNoVermelho && (
        <p style={{ color: 'red' }}>
          Você está no vermelho!
        </p>
      )}
    </div>
  );
};

export default Consultas;
