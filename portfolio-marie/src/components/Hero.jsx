import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Création de sites & design d'expérience</h1>
        <p className="lead">
            Je suis Ntebe Marie Paule, designer et développeuse web basée à Douala. 
            J'aide les petites et moyennes entreprises à avoir une présence professionnelle
             en ligne grâce à un design réfléchi et des sites rapides.
          Je conçois des interfaces modernes et développe des sites performants,
          responsive et accessibles pour donner vie à vos idées.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">
            Demander un devis
          </a>
          <a className="btn btn-ghost" href="#portfolio">
            Voir le portfolio
          </a>
        </div>

        <div style={{ marginTop: 15 }} aria-hidden>
          <strong>Compétences :</strong>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 10,
              flexWrap: "wrap",
            }}
          >
            {["UI/UX", "React", "Next.js", "HTML/CSS", "Laravel"].map(
              (skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "6px 8px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 13,
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <aside
        style={{
          background:
            "linear-gradient(180deg, rgba(124,92,255,0.12), rgba(91,214,255,0.06))",
          borderRadius: 14,
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <div class="carde">
            <img src="/images/undraw3.png" alt="Design" class="card-image" />
        </div>
        <div style={{padding: 22}}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Ce que je propose</div>
            <div className="small">
            Design d'identité, maquettes Figma, sites marketing, boutiques en
            ligne, intégration HTML/CSS, développement React/Next, optimisation SEO
            et performance.
            </div>
            <br/>
        </div>
        {/* <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <a className="btn btn-primary" href="#contact">
            Contact rapide
          </a>
          <a className="btn btn-ghost" href="#">
            Tarifs
          </a>
        </div> */}
      </aside>
       
    </section>
  );
};

export default Hero;
