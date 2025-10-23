import React from 'react'

// Flyer web component (Tailwind CSS). Utilise l'URL du portfolio pour générer un QR code via api.qrserver.com
// À placer dans src/components/Flyer.jsx

export default function Flyer({
  name = 'Marie Paule Ntebe',
  role = 'Ingénieur Informaticienne',
  slogan = 'Donnez vie à votre présence en ligne',
  email = 'mariepaulentebe@gmail.com',
  phones = ['+237 694961330', '+237 675847058'],
  portfolioUrl = 'https://portfolio-ntebemp.vercel.app/'
}) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    portfolioUrl
  )}`

  return (
    <article className="max-w-lg mx-auto bg-gradient-to-b from-[#071025] via-[#061226] to-[#04101a] text-white rounded-2xl shadow-2xl p-6 md:p-8">
      <header className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg flex-shrink-0 bg-gradient-to-br from-[#7c5cff] to-[#5bd6ff] flex items-center justify-center font-extrabold text-[#04102a]">MP</div>
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold">{name}</h1>
          <p className="text-sm text-gray-300 mt-1">{role}</p>
          <p className="mt-3 text-sm text-gray-200 italic">{slogan}</p>
        </div>
      </header>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm text-gray-300 uppercase tracking-wide">Services</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#7c5cff]" />
              <span className="text-sm">Création de site vitrine professionnel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#7c5cff]" />
              <span className="text-sm">Refonte de site existant</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#7c5cff]" />
              <span className="text-sm">Optimisation SEO (référencement)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#7c5cff]" />
              <span className="text-sm">Maintenance et assistance technique</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 mt-2 rounded-full bg-[#7c5cff]" />
              <span className="text-sm">Conception d'identité visuelle</span>
            </li>
          </ul>

          <div className="mt-6 text-sm text-gray-200">
            <div>📧 <a className="text-accent hover:underline" href={`mailto:${email}`}>{email}</a></div>
            <div className="mt-1">📞 {phones.join(' / ')}</div>
            <div className="mt-2 text-xs text-gray-400">Portfolio : <a className="text-accent hover:underline" href={portfolioUrl} target="_blank" rel="noreferrer">{portfolioUrl.replace(/^https?:\/\//, '')}</a></div>
          </div>
        </div>

        <aside className="flex flex-col items-center justify-between p-4 bg-[rgba(124,92,255,0.06)] rounded-xl">
          <div className="text-center">
            <img src={qrUrl} alt="QR code vers portfolio" className="w-40 h-40 mx-auto rounded-md" />
            <p className="mt-3 text-sm text-gray-200">Scannez pour voir le portfolio</p>
          </div>

          <div className="mt-4 w-full">
            <a href={portfolioUrl} target="_blank" rel="noreferrer" className="block text-center px-4 py-2 rounded-md bg-[#7c5cff] text-[#04102a] font-semibold">Visiter le portfolio</a>
            <a href={`mailto:${email}`} className="block mt-3 text-center text-sm text-gray-300 underline">Envoyer un email</a>
          </div>
        </aside>
      </section>

      <footer className="mt-6 text-xs text-gray-400 text-center">© {new Date().getFullYear()} {name} — Tous droits réservés</footer>
    </article>
  )
}
