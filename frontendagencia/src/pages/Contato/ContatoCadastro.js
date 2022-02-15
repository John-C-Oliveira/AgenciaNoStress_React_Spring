import React, {  useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import background from '../img/contatobackground.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function ContatoCadastro() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[nome,setNome]=useState('')
    const[email,setEmail]=useState('')
    const[mensagem,setMensagem]=useState('')    
   
   
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        const contato={nome,email,mensagem}
        console.log(contato)
        fetch("http://localhost:8080/contato/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(contato)

        }).then(()=>{
            console.log("Mensagem enviada")
            window.alert("Mensagem enviada!")
            
        })
    }
    
    return (

        <Container align-itens="center"  class="backgroundprincipal" style={{ backgroundImage: `url(${background})` }}>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Entre em Contato Conosco</u></h1>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth
                               value={nome}
                               onChange={(e)=>setNome(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                               value={email}
                               onChange={(e)=>setEmail(e.target.value)}
                              
                    />
                    <TextField id="outlined-basic" label="Mensagem" variant="outlined" fullWidth
                               value={mensagem}
                               onChange={(e)=>setMensagem(e.target.value)}
                               
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Confirmar
                    </Button>
                </form>
                

            </Paper>
            


        </Container>
    );
}