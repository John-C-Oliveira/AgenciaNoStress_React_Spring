import React from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import axios from 'axios';



class ClienteBuscar extends React.Component {

    state = {
        clientes: []
    }
    componentDidMount(){
        axios.get("http://localhost:8080/cliente/getAll")
        .then(res=>{
            const dadosclientes=res.data
            this.setState({clientes:dadosclientes})
        })
    }
    componentDidUpdate(){
        this.componentDidMount();
    }

    deleteCliente(id){
        if(window.confirm('Deseja excluir o Cadastro?')){
            fetch('http://localhost:8080/cliente/'+id,{
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'    
            }
            })
        }
    }



render() {
    
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    return (
        <Container>
            <h1>Clientes</h1>

            <Paper elevation={3} style={paperStyle}>

                {this.state.clientes.map(cliente => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={cliente.id}>
                        Nome:{cliente.nome}<br />
                        E-mail:{cliente.email}<br />
                        Idade:{cliente.idade}<br />
                        <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                        <Button id="buttoncrud" variant="contained" color="secondary">Alterar</Button>
                        <Button id="buttoncrud" variant="contained" color="danger" onClick={()=>this.deleteCliente(cliente.id)} >Excluir</Button>

                    </Paper>
                ))
                }


            </Paper>
        </Container>
    )
}
}export default ClienteBuscar