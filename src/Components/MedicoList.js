import React, {Component} from 'react';

class MedicoList extends Component{
   
    state = {
        medicos:[],
        novoItem:null
    }

    componentDidMount(){
        fetch('https://telepephc.famema.br:9898/api/grupos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    medicos:data
                })
            })       
    }
    
    componentDidUpdate(prevProps, prevState){

    }

    componentWillUnmount(){

    }
    
    handleChanged = (e)=>{
        this.setState({
            novoItem:e.target.value
        })
    }

    handleSubmit = (e)=>{
        this.setState({
            medicos:[...this.state.medicos, this.state.novoItem]
        })
    }

    render(){        
        return(       
                <>
                    <span>Centro de custo <strong>{this.props.cc}</strong></span>
                    <ul>
                        <li>{this.props.Especialidades}</li>
                        {this.state.medicos.map(medico => <li key={medico.id}>{medico.nome}</li>)}
                    </ul>
                    <input type="text" onChange={this.handleChanged}/>
                    <button type="submit" onClick={this.handleSubmit}>Gravar</button>
                </>
        )
    }

}

export default MedicoList;