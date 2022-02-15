import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import background from '../img/fundopromo.jpg'
import { NavLink } from 'reactstrap';


export default function AnuncioBusca() {
    const [anuncios, setAnuncios] = useState([])



    useEffect(() => {
        fetch("http://localhost:8080/anuncio/getAll")
            .then(res => res.json())
            .then((result) => {
                setAnuncios(result);
            }
            )
    }, [])

    return (

        <>
            <section id="card-container" style={{ backgroundImage: `url(${background})` }}>

                <div>
                <NavLink href="/novoanuncio"><button className="btn btn-danger mt-5">
                        Criar Anuncio
                    </button></NavLink>
                </div>
                <div className="cards container" >

                    {anuncios.map(anuncio => (
                        <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 200 }} style={{ margin: '10px' }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {anuncio.nome}<br />
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Valor: R${anuncio.valor}<br />
                                    Data de Saida:{anuncio.dataSaida}<br />
                                    Data de Retorno:{anuncio.dataRetorno} <br />

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Comprar</Button>

                            </CardActions>
                        </Card>
                    ))
                    }

                </div>
            </section>
        </>
    )
}
