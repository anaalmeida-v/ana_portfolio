import React from "react";
import './Header.css';

export const Header = () => {
    const links = [
        { label: 'Sobre', href: '#sobre' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experiência', href: '#experiencia' },
        { label: 'Formação', href: '#formacao' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <header className="header-container">
            <div className="header-logo">
                ANAC<span className="logo-dev">.DEV</span> <span className="logo-cursor">&gt;_</span>
            </div>

            <nav className="header-nav">
                <ul className="nav-lista">
                    {links.map((link) => (
                        <li key={link.label} className="nav-item">
                            <a href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contato" className="header-badge">Disponível</a>
        </header>
    );
};
