import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';
import background from '../img/backgrounddestino.jpg'

class DestinoCadastro extends React.Component {
    state = {
        nomeDestino: '',
        qtdadePessoa: '',
        IMGDestino: '',
        paisDestino: '',
        ufdestino: ''
    }


    cadastrar = (e) => {
        e.preventDefault()
        const destino = this.state
        console.log(destino)
        fetch("http://localhost:8080/destino/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(destino)

        }).then(() => {
            console.log("Novo Destino Adicionado")
            window.alert("Cadastro realizado com Sucesso!")
        })
        this.componentDidUpdate(DestinoCadastro());
    }


    render() {



        return (

            <Container class="backgroundprincipal" style={{ backgroundImage: `url(${background})` }}>
                <Paper elevation={3} className="margintop">
                    <h3>Cadastro de Destino</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Nome do Local" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ nomeDestino: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Quantidade máxima de pessoas para viagem" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ qtdadePessoa: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Imagens do Destino" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ IMGDestino: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Estado(UF)" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ paisDestino: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="País do Destino" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ ufdestino: e.target.value })}

                            />
                        </div>
                        <Button variant="contained" color="secondary" onClick={this.cadastrar}>
                            Cadastrar
                        </Button>
                    </form>
                    <NavLink href="/buscardestino"><Button variant="contained" color="primary">
                        Consultar Destino
                    </Button>
                    </NavLink>



                </Paper>




            </Container>
        );

    }
} export default DestinoCadastro