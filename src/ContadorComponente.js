import React, { useState } from 'react';
import './ContadorComponente.css';

const ContadorComponente = ({num}) => {

  // declara-se a variável e a function que irá manipular a variável
  // no useState() dentro do parênteses deve ir o valor inicial da variável
  const [contador, setContador] = useState(Number(num));

  // Sintaxe das funções
  function soma() {
    setContador(contador + 1);
  }

  const subtrai = () => {
    setContador(contador - 1);
  }

  const limpa = () => setContador(0);

  return (
    <>
      <h2>Componente: Contador de Cliques</h2>
      <h3>Você clicou {contador} vezes</h3>
      
      <button onClick={soma}>+1</button>
      <button onClick={limpa}>Limpa</button>
      <button onClick={subtrai}>-1</button>
    </>
  )
}

export default ContadorComponente;
