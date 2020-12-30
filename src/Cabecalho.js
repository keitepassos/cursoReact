import React, {Component} from 'react';
import logo from './assets/foto.png';

class Cabecalho extends Component{
    render(){
        return(
            <>
                <span><strong>Keite Passos</strong></span>
                <br/>
                <span><strong>1986</strong></span>
                <br/>
                <img src={logo} />
            </>
        )
    }
}

export default Cabecalho;