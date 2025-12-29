import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="hero" style={{ minHeight: '400px', height: '50vh' }}>
                <div className="container hero__content">
                    <span className="hero__subtitle">Wir freuen uns auf Sie</span>
                    <h1>KONTAKT</h1>
                </div>
                <div className="hero__divider"></div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '64px' }}>
                        {/* Contact Info */}
                        <div>
                            <h2>Hier finden Sie uns</h2>
                            <p style={{ marginBottom: '32px' }}>Wir stehen Ihnen gerne für ein persönliches Beratungsgespräch zur Verfügung.</p>

                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Adresse</h3>
                                <p>Zowal Bausanierung<br />Hausener Brückweg 1<br />60488 Frankfurt am Main</p>
                            </div>

                            <div style={{ marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>Kontakt</h3>
                                <p><strong>Telefon:</strong> <a href="tel:015783709095" style={{ color: 'inherit' }}>01578 370 90 95</a></p>
                                <p><strong>E-Mail:</strong> <a href="mailto:info@zowal.de" style={{ color: 'inherit' }}>info@zowal.de</a></p>
                            </div>

                            {/* Google Map Embed */}
                            <div style={{ width: '100%', height: '350px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                                <iframe
                                    src="https://www.google.com/maps?q=Hausener+Br%C3%BCckweg+1,+60488+Frankfurt+am+Main&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Zowal Standort"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div style={{ background: '#FFF', padding: '48px', boxShadow: 'var(--shadow-lg)', borderRadius: '8px' }}>
                            <h2 style={{ fontSize: '1.8rem' }}>Nachricht senden</h2>
                            <form action="#" method="POST">
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
                                <input type="text" id="name" name="name" className="contact-input" placeholder="Ihr Name" required style={{ width: '100%', padding: '16px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />

                                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>E-Mail</label>
                                <input type="email" id="email" name="email" className="contact-input" placeholder="Ihre E-Mail Adresse" required style={{ width: '100%', padding: '16px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }} />

                                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Nachricht</label>
                                <textarea id="message" name="message" className="contact-input" rows="5" placeholder="Wie können wir Ihnen helfen?" required style={{ width: '100%', padding: '16px', marginBottom: '16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'inherit' }}></textarea>

                                <button type="submit" className="btn" style={{ width: '100%' }}>Absenden</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
