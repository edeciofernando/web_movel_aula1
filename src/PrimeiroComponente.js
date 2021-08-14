import React from "react";
import "./PrimeiroComponente.css";

//function PrimeiroComponente() {
//}

// export const PrimeiroComponente = () => {
//export const PrimeiroComponente = (props) => {
export const PrimeiroComponente = ({ nome, idade }) => {
  return (
    <>
      <h2>Aula Inicial: Dia 09 de Agosto de 2021</h2>
      <h3>Introdução ao ReactJS</h3>
      {/* <h4>Bem-vindo: {props.nome} - você tem {props.idade} anos</h4> */}
      <h4>
        Bem-vindo: {nome} - você tem {idade} anos
      </h4>
    </>
  );
};

// export default PrimeiroComponente;
