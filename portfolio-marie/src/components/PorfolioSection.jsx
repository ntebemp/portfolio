import React from "react";

const projects = [
  {
    title: "Site Corporate - MDC HOLDINGS",
    meta: "Design & intégration - 2025",
    desc: "Présentation d'une société de services en énergie solaire — offres & contact.",
    gradient: "linear-gradient(90deg,#123 0%, #234 100%)",
    img: '/images/mdcholding.PNG',
    url: 'https://mdcholdings-cmr.com/'
  },
  {
    title: "Site vitrine - Tonus Drinks",
    meta: "Design produit & front - 2022",
    desc: "Site vitrine de présentation de jus naturel — commande et catalogue de services .",
    gradient: "linear-gradient(90deg,#312 0%, #623 100%)",
    img: '/images/portfolio-3.PNG',
    url: 'https://tonusdrinks.com/'
  },
  {
    title: "Site professionel - HKAPITAL",
    meta: "Site professionel - 2023",
    desc: "Refonte d'un site corporate avec optimisation mobile et SEO.",
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
