import React,{useState} from 'react';
import { Container, Paper, Button } from '@material-ui/core';
import axios from 'axios';



class DestinoBuscar extends React.Component {

constructor(props){
super(props);
this.alterar=this.alterar.bind(this);
}
alterar=()=>{
    const [isModalVisible,setModalVisible]=useState(false);
    return [isModalVisible,setModalVisible]
       
}
    state = {
        destinos: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/destino/getAll")
            .then(res => {
                const dadosdestinos = res.data
                this.setState({ destinos: dadosdestinos })
            })

    }
    componentDidUpdate() {
        this.componentDidMount();
    }

    deleteDestino(id) {
        if (window.confirm('Deseja excluir o Cadastro?')) {
            fetch('http://localhost:8080/destino/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        
        const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
        return (

            <Container>
                    {this.alterar.isModelVisible? <h1>teste</h1>:null}
                <h1>Destinos Cadastrados</h1>

                <Paper elevation={3} style={paperStyle}>

                    {this.state.destinos.map(destino => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={destino.id}>
                            Nome:{destino.nomeDestino}<br />
                            Quantidae de Pessoas Max:{destino.qtdadePessoa}<br />
                            País:{destino.paisDestino}<br />
                            UF:{destino.ufdestino}<br />
                            <Button id="buttoncrud" variant="contained" color="primary" >Detalhes</Button>
                            <Button id="buttoncrud" variant="contained" color="secondary" >Alterar</Button>
                            <Button id="buttoncrud" variant="contained" color="danger" onClick={() => this.deleteDestino(destino.id)}>Excluir</Button>

                        </Paper>
                    ))
                    }


                </Paper>



            </Container>
        );
    }
} export default DestinoBuscar