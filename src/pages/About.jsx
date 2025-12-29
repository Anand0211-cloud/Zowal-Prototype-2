import React from 'react';

const About = () => {
    return (
        <>
            <section className="hero" style={{ minHeight: '400px', height: '50vh' }}>
                <div className="container hero__content">
                    <span className="hero__subtitle">Unsere Geschichte & Werte</span>
                    <h1>ÜBER UNS</h1>
                </div>
                <div className="hero__divider"></div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '64px' }}>
                        <div>
                            <h2>Erfahrung und Wissenswertes</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Egal ob Altbausanierung, Schimmelsanierung oder Innenausbau – wir sorgen für eine fachgerechte Behandlung in Frankfurt und dem Rhein-Main-Gebiet! Unser Arbeitsspektrum ist breit gefächert, wobei Sie stets von unseren hochqualifizierten Facharbeitern profitieren können.
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                Unser Bausanierungsunternehmen wurde <strong>2005 gegründet</strong> und beruft sich stets auf die jahrelangen Erfahrungswerte unserer Mitarbeiter und Kunden, sodass Sie sich auf die hohe Qualität unserer Arbeiten verlassen können! Dabei ist uns auch ein angemessenes Zeitmanagement sehr wichtig, um Ihnen Zuverlässigkeit und Zufriedenheit zu garantieren.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ background: 'var(--color-primary)', position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', zIndex: '-1' }}></div>
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" alt="Baustelle Frankfurt" style={{ boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container text-center">
                    <h2>Wir sind ehrlich und zuverlässig.</h2>
                    <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#666', margin: '32px auto', maxWidth: '800px' }}>
                        "Die Sanierung von Bauten ist ein Thema, mit dem sich jeder früher oder später beschäftigen muss. Wir sorgen dafür, dass die Sanierung Ihres Bauwerks sorgfältig und gewissenhaft durchgeführt wird."
                    </blockquote>
                    <cite style={{ display: 'block', fontWeight: '700', color: 'var(--color-primary)' }}>Mariusz Zowal</cite>
                    <span style={{ fontSize: '0.9rem', color: '#888' }}>Geschäftsführer</span>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '48px' }}>
                        <h2>Unser Ansatz</h2>
                    </div>
                    <div className="grid grid-2">
                        <div>
                            <h3>Optimierte Praktiken</h3>
                            <p>Durch unsere reichhaltige Erfahrung werden die Praktiken stets optimiert, um das bestmögliche Ergebnis für die Gebäudesanierung zu erhalten.</p>
                        </div>
                        <div>
                            <h3>Bestes Fachpersonal</h3>
                            <p>Mit einem motivierten Team aus besten Facharbeitern in Frankfurt am Main und dem Rhein-Main-Gebiet sind wir stets bemüht, Ihnen die bestmögliche Ausführungen der Arbeiten zu garantieren.</p>
                        </div>
                        <div>
                            <h3>Individuelle Lösungen</h3>
                            <p>Neben der reinen Gebäudesanierung sind wir sowohl auf Umbauten, als auch auf Innenausbauten spezialisiert und sorgen dafür, dass Ihre persönlichen Vorstellungen in die Tat umgesetzt werden.</p>
                        </div>
                        <div>
                            <h3>Zeitgemäßes Design</h3>
                            <p>Wir entwickeln mit unserem Fachpersonal ein zeitgemäßes Design, welches speziell für Ihr Bauwerk ausgelegt ist.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
