import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';
import { NavLink } from 'reactstrap';
import background from '../img/fundoanuncio.jpg'





const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function AnuncioCadastro() {

    const [nome, setNome] = useState('')
    const [valor, setValor] = useState('')
    const [dataSaida, setDataSaida] = useState('')
    const [dataRetorno, setDataRetorno] = useState('')


    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const anuncio = { nome, valor, dataSaida, dataRetorno }
        console.log(anuncio)
        fetch("http://localhost:8080/anuncio/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(anuncio)

        }).then(() => {
            console.log("Novo Anuncio Adicionado")
            window.alert("Cadastro realizado com Sucesso!")
        })
    }

    return (

        <Container class="backgroundprincipal" style={{ backgroundImage: `url(${background})` }}>
            <Paper elevation={3} className="margintop">
                <h3>Cadastro de Anuncio</h3>

                <form id='desingcadastro' className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField id="outlined-basic" label="Nome do Anuncio" variant="outlined" fullWidth
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Valor" variant="outlined" fullWidth
                            value={valor}
                            onChange={(e) => setValor(e.target.value.replace(",", "."))}

                        />
                    </div>
                    <div>
                        <label>Data de Saida</label>
                        <TextField type="date" id="outlined-basic" variant="outlined" fullWidth
                            value={dataSaida}
                            onChange={(e) => setDataSaida(e.target.value)}

                        />
                    </div>
                    <div>
                        <label>Data do Retorno</label>
                        <TextField type="date" id="outlined-basic" variant="outlined" fullWidth
                            value={dataRetorno}
                            onChange={(e) => setDataRetorno(e.target.value)}

                        />
                    </div>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Confirmar
                    </Button>
                </form>
                <NavLink href="/buscaranuncio"><Button variant="contained" color="primary">
                    Anuncios Cadastrados
                </Button>
                </NavLink>

            </Paper>



        </Container>
    );
}