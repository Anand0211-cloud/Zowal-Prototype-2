import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero__content">
                    <span className="hero__subtitle">Ihr Zowal Bausanierungsteam in Frankfurt</span>
                    <h1 className="fade-in-up">WIR SIND EHRLICH & ZUVERLÄSSIG</h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px' }}>
                        Egal ob Altbausanierung, Schimmelsanierung oder Innenausbau – wir sorgen für eine fachgerechte und hochwertige Umsetzung.
                    </p>
                    <div className="hero__actions">
                        <Link to="/kontakt" className="btn">Angebot anfordern</Link>
                        <Link to="/ueberuns" className="btn btn--outline">Über uns</Link>
                    </div>
                </div>
                <div className="hero__divider"></div>
            </section>

            {/* Intro Section */}
            <section className="section-padding text-center">
                <div className="container">
                    <h2 className="section-title">Qualität & Erfahrung seit 2005</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text)' }}>
                        Mit einem motivierten Team aus besten Facharbeitern in Frankfurt am Main und dem Rhein-Main-Gebiet sind wir stets bemüht, Ihnen die bestmögliche Ausführung der Arbeiten zu garantieren. Wir stehen für Transparenz, Termintreue und deutsche Handwerksqualität.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '48px' }}>
                        <h2>Unsere Leistungen</h2>
                    </div>

                    <div className="grid grid-3">
                        <div className="card">
                            <div className="card__icon">🏗️</div>
                            <h3 className="card__title">Altbausanierung</h3>
                            <p className="card__text">Werterhalt und Modernisierung historischer Bausubstanz mit modernsten Methoden und Respekt vor dem Bestand.</p>
                            <Link to="/ueberuns" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Mehr erfahren →</Link>
                        </div>

                        <div className="card">
                            <div className="card__icon">🏠</div>
                            <h3 className="card__title">Innenausbau</h3>
                            <p className="card__text">Individuelle Raumgestaltung, Trockenbau, und komplette Renovierungen um Ihre Wohnträume wahr werden zu lassen.</p>
                            <Link to="/ueberuns" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Mehr erfahren →</Link>
                        </div>

                        <div className="card">
                            <div className="card__icon">💧</div>
                            <h3 className="card__title">Schimmelsanierung</h3>
                            <p className="card__text">Fachgerechte Beseitigung von Feuchtigkeitsschäden und Schimmel für ein gesundes Wohnklima.</p>
                            <Link to="/ueberuns" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>Mehr erfahren →</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Split: Products/Partners */}
            <section className="section-padding">
                <div className="container">
                    {/* Row 1: Handgefertigte Böden (Mafra) */}
                    <div className="feature-row">
                        <div className="feature-img">
                            {/* Using Uploaded Image: Handgefertigte Böden */}
                            <img src="/assets/boden.jpg" alt="Edle Parkettböden" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="feature-content">
                            <h2>Handgefertigte Böden</h2>
                            <p style={{ marginBottom: '24px' }}>Zusammen mit unserem Partner <strong>Mafra</strong> bieten wir Ihnen exklusive Parkettböden aus besten Materialien. Langlebigkeit und Ästhetik stehen dabei an erster Stelle.</p>
                            <Link to="/produkte" className="btn">Zu den Bodenbelägen</Link>
                        </div>
                    </div>

                    {/* Row 2: Fenster & Türen (Alsecco) */}
                    <div className="feature-row feature-row--reverse">
                        <div className="feature-img">
                            {/* Using Uploaded Image: Fenster & Türen */}
                            <img src="/assets/fenster-tueren.jpg" alt="Moderne Fenster" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="feature-content">
                            <h2>Fenster & Türen</h2>
                            <p style={{ marginBottom: '24px' }}>In Kooperation mit <strong>Alsecco</strong> verkaufen und verbauen wir hochwertige Fenster und Türen, die energetisch und optisch höchsten Ansprüchen genügen.</p>
                            <Link to="/produkte" className="btn">Zu den Fenstern</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section: Project Inquiry Form + Image */}
            <section className="section-padding" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '64px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>

                        {/* Left: Content & Form */}
                        <div style={{ padding: '48px' }}>
                            <span className="hero__subtitle" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Lassen Sie uns starten</span>
                            <h2 style={{ marginBottom: '16px' }}>Planen Sie ein Projekt?</h2>
                            <p style={{ marginBottom: '32px', color: 'var(--color-text)' }}>
                                Erzählen Sie uns von Ihrem Vorhaben. Wir beraten Sie gerne unverbindlich vor Ort und erstellen ein individuelles Angebot.
                            </p>

                            <form action="#" style={{ display: 'grid', gap: '16px' }}>
                                <input
                                    type="text"
                                    placeholder="Ihr Name"
                                    style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', fontFamily: 'inherit' }}
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefonnummer"
                                    style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', fontFamily: 'inherit' }}
                                />
                                <select style={{ padding: '16px', border: '1px solid #ddd', borderRadius: '4px', width: '100%', fontFamily: 'inherit', color: '#555' }}>
                                    <option value="" disabled selected>Worum geht es?</option>
                                    <option value="altbau">Altbausanierung</option>
                                    <option value="innenausbau">Innenausbau</option>
                                    <option value="boden">Bodenverlegung</option>
                                    <option value="fenster">Fenster & Türen</option>
                                    <option value="sonstiges">Sonstiges</option>
                                </select>
                                <button type="submit" className="btn" style={{ marginTop: '8px', width: '100%' }}>Kostenlos Anfragen</button>
                            </form>
                        </div>

                        {/* Right: Image */}
                        <div style={{ height: '100%', minHeight: '500px' }}>
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
                                alt="Modern renovation planning"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
