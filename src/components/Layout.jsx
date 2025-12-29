import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <Link to="/" className="logo">
                        <span className="logo__icon">Z</span>
                        <div className="logo__text">
                            <span className="logo__title">ZOWAL</span>
                            <span className="logo__subtitle">BAUSANIERUNG</span>
                        </div>
                    </Link>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li><Link to="/" className={`nav__link ${isActive('/')}`}>Home</Link></li>
                            <li><Link to="/ueberuns" className={`nav__link ${isActive('/ueberuns')}`}>Über uns</Link></li>
                            <li><Link to="/produkte" className={`nav__link ${isActive('/produkte')}`}>Produkte</Link></li>
                            <li><Link to="/kontakt" className="nav__link btn-nav">Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="grid grid-3" style={{ marginBottom: '48px' }}>
                        <div>
                            <h3>ZOWAL Bausanierung</h3>
                            <p>Ihr zuverlässiger Partner für Sanierung und Innenausbau im Rhein-Main-Gebiet.</p>
                        </div>
                        <div>
                            <h3>Kontakt</h3>
                            <p>Hausener Brückweg 1<br />60488 Frankfurt am Main</p>
                            <p><a href="tel:015783709095">01578 370 90 95</a></p>
                            <p><a href="mailto:info@zowal.de">info@zowal.de</a></p>
                        </div>
                        <div>
                            <h3>Rechtliches</h3>
                            <p><Link to="/kontakt">Impressum</Link></p>
                            <p><Link to="/kontakt">Datenschutzerklärung</Link></p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #444', paddingTop: '24px', textAlign: 'center', color: '#777', fontSize: '0.85rem' }}>
                        <p>&copy; 2025 Zowal Bausanierung. Alle Rechte vorbehalten.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
