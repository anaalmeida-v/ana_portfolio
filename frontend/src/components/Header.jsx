import React from "react";
import './Header.css';

export const Header = () => {
    const links = ['Home', 'Projetos', 'Sobre', 'Contato'];

    return (
        <header className="header-container">
            <div className="header-logo">
                Ana<span className="logo-ponto">.</span>dev
            </div>

            <nav className="header-nav">
                <ul className="nav-lista">
                    {links.map((link) =>  (
                        <li key={link} className="nav-item">
                            <a href={`#${link.toLocaleLowerCase()}`} className="nav-link">
                                {link}
                            </a>                            
                        </li>
                    ))

                    }
                </ul>
            </nav>
        </header>      
    )
};