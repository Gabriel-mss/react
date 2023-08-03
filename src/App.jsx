import React from 'react';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default (_) => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Exemplo de Card">
            
        </Card>

        <Aleatorio min={10} max={60}/>
        <Fragmento />
        <ComParametro 
            titulo="Situação do Aluno" 
            aluno="Pedro Silva" 
            nota= { 9.3 } />
        <Primeiro></Primeiro>
    </div>
);