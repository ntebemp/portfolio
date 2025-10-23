import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

         const handleChange = (e) =>
        setForm({ ...form, [e.target.id]: e.target.value });

        const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;

        if (!name || !email || !message) {
        alert("Veuillez compléter tous les champs.");
        return;
        }

        const subject = encodeURIComponent("Demande depuis le site — " + name);
        const body = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\n\n${message}`
        );

        // ✅ Ouvre directement Gmail dans un nouvel onglet
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mariepaulentebe@gmail.com&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    };

  return (
    
    <section id="contact" className="contact">
      <div>
        <h2>Contact</h2>
        <p className="small">
          Envoyez un message pour obtenir un devis ou pour discuter d'un projet.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Votre nom</label>
          <input
            id="name"
            placeholder="Entrez votre nom et prénom"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Entrez votre adresse email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Dites en quelques mots le projet..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <div
            style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}
          >
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
            <div className="small">
              Ou écrivez à <a href="mailto:mariepaulentebe@gmail.com">mariepaulentebe@gmail.com</a>
            </div>
          </div>
        </form>
      </div>

    <aside
    style={{
        padding: 18,
        background: "rgba(255,255,255,0.02)",
        borderRadius: 12,
        lineHeight: 1.6,
        border: '1px solid rgba(255, 255, 255, 0.05)'
    }}
    >
    <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
        Informations
    </div>

    <div className="small" style={{ marginBottom: 12 }}>
        Basée à <strong>Douala, Cameroun</strong>, disponible pour des missions à
        distance ou sur place, à temps partiel ou à projet.
        {/* <br />
        <strong>Langues :</strong> Français, Anglais. */}
    </div>

    <div style={{ marginBottom: 12 }}>
        <strong>Domaines d’expertise</strong>
        <div className="small" style={{ marginTop: 6 }}>
        • Développement web (React, Next, Laravel)
        <br />
        • Intégration d’API et bases de données
        <br />
        • Création de sites vitrines et e-commerce
        <br />
        • Optimisation SEO et performances
        </div>
    </div>

    {/* <div style={{ marginBottom: 12 }}>
        <strong>Outils & technologies</strong>
        <div className="small" style={{ marginTop: 6 }}>
        VS Code, GitHub, Supabase, Figma, Firebase, Vercel, Tailwind CSS
        </div>
    </div> */}

    <div style={{ marginBottom: 12 }}>
        <strong>Tarif indicatif</strong>
        <div className="small" style={{ marginTop: 6 }}>
        À partir de <strong>153 €</strong> pour un site vitrine simple.
        <br />
        Devis personnalisé selon vos besoins et fonctionnalités.
        </div>
    </div>

    <div>
        <strong>Appelez</strong>
         <div className="small" style={{ marginTop: 6 }}>
        • +237 694-961-330   <br />
        • +237 675-847-058
        </div>
    </div>
    </aside>

    </section>
  );
};

export default Contact;
