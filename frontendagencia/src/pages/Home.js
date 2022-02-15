import React from 'react';
import background from './img/Home.jpg'
import Carousel from 'react-bootstrap/Carousel'
import fundo1 from '../pages/img/fundocarousel1.jpg'
import fundo2 from '../pages/img/fundocarousel2.jpg'
import fundo3 from '../pages/img/fundocarousel3.jpg'

function Home() {
    return (

        <div className="backgroundprincipal " style={{ backgroundImage: `url(${background})` }}>
            <div >
                <Carousel fade className="carousel-container">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fundo1}
                            alt="Lua de Mel"
                        />
                        <Carousel.Caption>
                            <h3>Curta o MOMENTO A DOIS</h3>
                            <p>Com a NoStress, sua Lua de Mel será inesquecivel.<br/>
                                Vocês merecem esse momento, aproveitem!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fundo2}
                            alt="Viajante Solo"
                        />

                        <Carousel.Caption>
                            <h3>Precisando de um tempo para RELAXAR?!</h3>
                            <p>A NoStress te proporciona esse momento.<br/>
                            Você também merece um tempo só seu, Cadastre-se e conheça nossos pacotes!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fundo3}
                            alt="Viajante Familia"
                        />

                        <Carousel.Caption>
                            <h3>Curta seus melhores momentos com sua FAMILIA</h3>
                            <p text-color='black'>Sabemos o quanto é importante estar perto de quem amamos!<br/>
                            Junte a familia, chame os amigos, e venham aprovietar tudo de bom pela NoStress!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    )
}
export default Home;