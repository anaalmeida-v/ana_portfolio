import React from 'react'
import './Home.css';

export const Home = () => {
    return (
        <section className="home-container"id="home">
            <div className="home-content">
                <span className="home-tagline">Disponível para novos projetos</span>

                <h1 className="home-title">
                    Criando experiências digitais <br /> interativas com
                    <span className="home-destaque">código moderno</span>.
                </h1>

                <p className="home-description">
                    Desenvolvedora Frontend focada em transformar ideias complexas em interfaces
                    fluidas, responsivas e visualmente impactantes.
                </p>

                <div className="home-buttons">
                    <a href="#projetos" className="btn btn-primary">
                        Ver meus projetos
                    </a>
                    <a href="#contato" className="btn btn-secondary">
                        Vamos conversar
                    </a>
                </div>
            </div>
        </section>
    );
};