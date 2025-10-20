import React from "react";
import { Palette, Code, Monitor } from 'lucide-react'
const services = [
  {
    icon:<Palette/>,
    title: "Maquettes & prototypes",
    subtitle: "Design UI/UX",
    description:
      "Wireframes, maquettes Figma, parcours utilisateur et tests d'utilisabilité.",
  },
  {
    icon:<Code/>,
    title: "React / Next.js/ Html/ Css",
    subtitle: "Développement Front-end",
    description:
      "Sites performants, composants réutilisables et code maintenable.",
  },
  {
    icon:<Monitor/>,
    title: "Installation & mise en ligne",
    subtitle: "Site vitrine & e-commerce",
    description:
      "Pages marketing, boutique en ligne et intégration paiement.",
  },
];

const Services = () => (
    
  <section id="services">
    <h2 style={{ marginTop: 26, textAlign: 'center', marginBottom: 38, }}>Mes Services</h2>
    <div className="services">
      {services.map((s, i) => (
        <div className="service" key={i}>
         <div className='text-brand mb-3'>{s.icon}</div>
          <strong>{s.subtitle}</strong>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
