// src/components/PricingGrid.jsx
import React from "react";

const plans = [
  {
    title: "Site Vitrine",
    price: "À partir de 153€",
    description: "Idéal pour les petites entreprises, portfolios ou associations.",
    features: [
      "1 à 5 pages personnalisées",
      "Design responsive (mobile & desktop)",
      "Optimisation SEO de base",
      "Formulaire de contact intégré",
      "Livraison en 10 à 14 jours",
    ],
  },
  {
    title: "Site Professionnel",
    price: "À partir de 320€",
    description: "Parfait pour les entreprises souhaitant une présence complète en ligne.",
    features: [
      "Jusqu’à 10 pages dynamiques",
      "CMS pour gestion de contenu",
      "Référencement SEO avancé",
      "Statistiques et intégrations (Google Analytics, etc.)",
      "Assistance technique 1 mois incluse",
    ],
  },
  {
    title: "E-Commerce",
    price: "À partir de 615€",
    description: "Pour vendre vos produits ou services directement en ligne.",
    features: [
      "Catalogue produits illimité",
      "Panier & paiement en ligne sécurisé",
      "Tableau de bord administrateur",
      "Optimisation pour la conversion",
      "Formation à la prise en main incluse",
    ],
  },
];

export default function PricingGrid() {
  return (
    <section id="pricing-grid" className="pricing-section">
      <h2 className="pricing-title">Tarifs & Prestations</h2>
      <p className="pricing-subtitle">
        Choisissez la formule qui correspond le mieux à vos besoins. Chaque site est conçu sur mesure selon vos objectifs.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p className="description">{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
            <a href="#contact" className="pricing-btn">Demander un devis</a>
          </div>
        ))}
      </div>
    </section>
  );
}
