import React from 'react';
import ReactDOM from 'react-dom';
// sem {} quando for usado: export default
//import PrimeiroComponente from './PrimeiroComponente';
// com {} quando for usado: export 
//import { PrimeiroComponente } from './PrimeiroComponente';

//import ContadorComponente from './ContadorComponente';
import App from './App';

//const mensagem = "Bem-vindo: Aula de Desenvolvimento Web para Dispositivos Móveis";
// const mensagem = <div>
//                    <h1>Bem-Vindo: Aula 1</h1>
//                    <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </div>

// Com Fragment é necessário acrescentar o import { Fragment }
// const mensagem = <Fragment>
//                    <h1>Bem-Vindo: Aula 1</h1>
//                    <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </Fragment>

// const mensagem = <>
//                    <h1>Bem-Vindo: Aula 1</h1>
//                    <h2>Desenvolvimento Web para Dispositivos Móveis</h2>
//                  </>

ReactDOM.render(
//  mensagem,
//  <PrimeiroComponente nome="Ana Maria" idade="25" />,
//  <ContadorComponente />,
  <App />,
  document.getElementById('root')
);
