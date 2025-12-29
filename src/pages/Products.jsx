import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <section className="hero" style={{ minHeight: '400px', height: '50vh' }}>
                <div className="container hero__content">
                    <span className="hero__subtitle">Qualität unserer Partner</span>
                    <h1>PRODUKTE</h1>
                </div>
                <div className="hero__divider"></div>
            </section>

            <section className="section-padding">
                <div className="container text-center">
                    <h2>Unsere Produkt-Partner</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 48px auto' }}>
                        Durch unsere Produkt-Partner <strong>Mafra</strong> sowie <strong>Alsecco</strong> sind wir in der Lage, Ihnen ein breites Spektrum an Hilfsstoffen und Systemen für Ihren Bedarf zu vermitteln.
                    </p>
                </div>

                <div className="container">
                    {/* MAFRA Section */}
                    <div className="feature-row" style={{ marginBottom: '80px' }}>
                        <div className="feature-img">
                            {/* Reusing Uploaded Image for Consistency */}
                            <img src="/assets/boden.jpg" alt="Mafra Boden" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="feature-content" style={{ padding: '32px', background: '#F9F9F9', borderLeft: '4px solid var(--color-primary)' }}>
                            <h3 style={{ color: 'var(--color-secondary)', fontSize: '2rem' }}>MAFRA</h3>
                            <p className="hero__subtitle" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Handgefertigte Böden</p>
                            <p>Wir kooperieren im Bereich von Parkettböden aus Holz eng mit Mafra. Sie erhalten handgefertigte Böden aus bestem Material, die jedem Raum eine einzigartige Atmosphäre verleihen.</p>
                            <ul style={{ marginTop: '16px', marginBottom: '24px' }}>
                                <li style={{ marginBottom: '8px' }}>✓ Exklusive Hölzer</li>
                                <li style={{ marginBottom: '8px' }}>✓ Handgefertigte Qualität</li>
                                <li style={{ marginBottom: '8px' }}>✓ Langlebig und robust</li>
                            </ul>
                            <Link to="/kontakt" className="btn">Beratung zu Böden</Link>
                        </div>
                    </div>

                    {/* ALSECCO Section */}
                    <div className="feature-row feature-row--reverse">
                        <div className="feature-img">
                            {/* Reusing Uploaded Image for Consistency */}
                            <img src="/assets/fenster-tueren.jpg" alt="Alsecco Fenster" style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="feature-content" style={{ padding: '32px', background: '#F9F9F9', borderRight: '4px solid var(--color-primary)' }}>
                            <h3 style={{ color: 'var(--color-secondary)', fontSize: '2rem' }}>ALSECCO</h3>
                            <p className="hero__subtitle" style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Fenster & Türen</p>
                            <p>Wir sind Ihr Partner für den Weiterverkauf und Einbau von Alsecco Fenstern und Türen. Moderne Systeme für optimale Energieeffizienz und Sicherheit.</p>
                            <ul style={{ marginTop: '16px', marginBottom: '24px' }}>
                                <li style={{ marginBottom: '8px' }}>✓ Hohe Wärmedämmung</li>
                                <li style={{ marginBottom: '8px' }}>✓ Modernes Design</li>
                                <li style={{ marginBottom: '8px' }}>✓ Einbruchschutz</li>
                            </ul>
                            <Link to="/kontakt" className="btn">Beratung zu Fenstern</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
