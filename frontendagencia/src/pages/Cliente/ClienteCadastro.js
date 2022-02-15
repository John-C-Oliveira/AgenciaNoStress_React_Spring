import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';
import background from '../img/fundocadastroc.jpg'


class ClienteCadastro extends React.Component {
    state = {
        nome: '',
        email: '',
        local: '',
        estado: '',
        idade: ''
    }
    cadastrar = (e) => {

        e.preventDefault()
        const cliente = this.state
        console.log(cliente)
        fetch("http://localhost:8080/cliente/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente)

        }).then(() => {
            console.log("Novo Cliente Adicionado")
            window.alert("Cadastro realizado com Sucesso!")

        })


    }


    render() {
        

        return (

            <Container class="backgroundprincipal" style={{ backgroundImage: `url(${background})` }}>
                <Paper elevation={3}  className="margintop">
                    <h3>Cadastro de Cliente</h3>

                    <form id='desingcadastro' className='form-control' noValidate autoComplete="off">

                        <div>
                            <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                                onChange={(e) => this.setState({ nome: e.target.value })}
                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ email: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Endereço" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ local: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Estado(UF)" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ estado: e.target.value })}

                            />
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Idade" variant="outlined" fullWidth

                                onChange={(e) => this.setState({ idade: e.target.value })}

                            />
                        </div>
                        <Button variant="contained" color="secondary" onClick={this.cadastrar} >
                            Cadastrar
                        </Button>
                    </form>
                    <NavLink href="/buscarcliente"><Button variant="contained" color="primary">
                        Consultar Cliente
                    </Button>
                    </NavLink>

                </Paper>
            </Container>
        )
    }
} export default ClienteCadastro