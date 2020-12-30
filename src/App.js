import React, { Component } from 'react';
import Cabecalho from './Cabecalho';
import MedicoList from './Components/MedicoList';
import EspecialidadesList from './Components/EspecialidadesList';
import './Estilos.css';


class App extends Component {
    render() {
        return (  
            <>
                <Cabecalho/>
                <hr/> 
                <MedicoList Especialidades='Ambulatório' cc='1.10.10'/>            
                <hr/> 
                <EspecialidadesList/>
            </>
        )
    }
}  

export default App;