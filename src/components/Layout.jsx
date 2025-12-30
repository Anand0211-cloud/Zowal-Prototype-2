import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    // Close menu when a link is clicked
    const closeMenu = () => setIsMenuOpen(false);

    // Toggle menu
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <span className="logo__icon">Z</span>
                        <div className="logo__text">
                            <span className="logo__title">ZOWAL</span>
                            <span className="logo__subtitle">BAUSANIERUNG</span>
                        </div>
                    </Link>

                    {/* Hamburger Toggle */}
                    <button className={`nav__toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav__list">
                            <li><Link to="/" className={`nav__link ${isActive('/')}`} onClick={closeMenu}>Startseite</Link></li>
                            <li><Link to="/ueberuns" className={`nav__link ${isActive('/ueberuns')}`} onClick={closeMenu}>Über uns</Link></li>
                            <li><Link to="/produkte" className={`nav__link ${isActive('/produkte')}`} onClick={closeMenu}>Produkte</Link></li>
                            <li><Link to="/kontakt" className="nav__link btn-nav" onClick={closeMenu}>Kontakt</Link></li>
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
