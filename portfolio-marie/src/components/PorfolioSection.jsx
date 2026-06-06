import React from "react";

const projects = [
  {
    title: "Site Corporate - Xendto Inc",
    meta: "Design & intégration - 2026",
    desc: "Site corporate de présentation d'une entreprise de technologie financière, avec sections sur les services, l'équipe et les actualités.",
    gradient: "linear-gradient(90deg,#123 0%, #234 100%)",
    img: '/images/xendto.PNG',
    url: 'https://xendtoinc.com/'
  },
  {
    title: "Site vitrine - Optimus Pharma",
    meta: "Design produit & front - 2025",
    desc: "Site vitrine pour une entreprise pharmaceutique, mettant en avant les produits, les innovations et les actualités de l'entreprise.",
    gradient: "linear-gradient(90deg,#312 0%, #623 100%)",
    img: '/images/optimus-pharma.PNG',
    url: 'https://optimus-pharma.com/'
  },
  {
    title: "Site professionnel - HKAPITAL",
    meta: "Site professionnel - 2023",
    desc: "Refonte d'un site professionnel avec optimisation mobile et SEO.",
    gradient: "linear-gradient(90deg,#223 0%, #462 100%)",
    img: '/images/kapital.png',
    url: 'https://mykapital.net/'
  },
];

const PortfolioSection = () => (


    
  <section id="portfolio" className="portfolio">
    <h2 style={{ marginTop: 26, textAlign: 'center', marginBottom: 38, }}>
        Projets récents
    </h2>
    <div className="cards">
      {projects.map((p, i) => (
        <div className="card" key={i}>
          <div
            style={{
              height: 160,
              background: p.gradient,
              borderRadius: '8px 8px 0px 0px',
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={p.img} style={{width: '100%', borderRadius: '8px 8px 0px 0px'}}/>
          </div>
          <div style={{padding: 14}}>
            <div style={{ fontWeight: 700 }}>{p.title}</div>
            <div className="meta">{p.meta}</div>
            <p className="small">{p.desc}</p>
            <a href={p.url} target="_blank" className='text-brand font-medium'>Voir le site →</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
