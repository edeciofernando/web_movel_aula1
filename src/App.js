import React from 'react'
import FotoComponente from './FotoComponente'
import { PrimeiroComponente } from './PrimeiroComponente'
import ContadorComponente from './ContadorComponente'

const App = () => {
  return (
    <>
      <FotoComponente />
      <PrimeiroComponente nome="Silvana" idade="29" />
      <ContadorComponente num="10" />
    </>    
  )
}

export default App;