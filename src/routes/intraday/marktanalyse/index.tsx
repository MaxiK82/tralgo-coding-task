import { createRoute, Link } from '@tanstack/react-router'
import { CheckIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Route as RootRoute } from '@/routes/__root'
import { Layout } from '@/layouts/Layout'
import { Breadcrumb } from '@/components'

const timeline = [
  {
    id: 1,
    content: 'Kapitel:',
    target: 'Vorgehensweisen im Trading',
    href: '#',
    duration: "20 Minuten",
    icon: CheckIcon,
    iconBackground: 'bg-tralgo-matisse-700',
  },
  {
    id: 2,
    content: 'Kapitel:',
    target: 'Die Strategie',
    href: '#',
    duration: "9 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 3,
    content: 'Kapitel:',
    target: 'News Trading',
    href: '#',
    duration: "12 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 4,
    content: 'Kapitel:',
    target: 'Algo Trading',
    href: '#',
    duration: "15 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 5,
    content: 'Kapitel:',
    target: 'Technische Analyse',
    href: '#',
    duration: "19 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 6,
    content: 'Kapitel:',
    target: 'Price-Action',
    href: '#',
    duration: "5 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 7,
    content: 'Kapitel:',
    target: 'Das Volumen Trading',
    href: '#',
    duration: "31 Minuten",
    icon: EllipsisVerticalIcon,
    iconBackground: 'bg-gray-400',
  },
]

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: 'intraday/marktanalyse',
  component: () => <Layout><RouteComponent /></Layout>,
})


function RouteComponent() {
  return (
    <>
      <main className="-mt-24 pb-8">
        <Breadcrumb />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 lg:max-w-[1920px]">
          <h1 className="sr-only">Academy</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 id="section-1-title" className="sr-only">
                  Academy Lernvideo
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow-sm p-6">
                  <p className='mb-4 font-bold text-2xl text-tralgo-matisse-700'>Phase 4: Die Marktanalyse</p>
                  <p className='mb-2'>In dieser Phase lernst du, wie du den Markt analysierst. Dabei geht es um die allgemeine Analyse des Marktes und um spezielle Techniken wie die Volumenanalyse.</p>
                  <ul className='pl-4 list-disc list-outside text-sm leading-6 mb-2'>
                    <li>
                      <span className='text-tralgo-matisse-700'><Link to='/intraday/marktanalyse/vorgehensweise-im-trading/'><b>Tradingarten und Stile</b></Link></span><br />
                      <span className='text-gray-600'>Lerne unterschiedliche Arten des Tradings und verschiedene Handelsstile kennen.</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Analysen - technisch</span><br />
                      <span className='text-gray-600'>Vertiefe dein Verständnis für die Volumenanalyse und ihre Anwendung im Trading.</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Analysen - theoretisch</span><br />
                      <span className='text-gray-600'>Erfahre mehr über theoretische Analysen und wie sie deine TradingEntscheidungen beeinflussen können.</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Analysen - analytisch</span><br />
                      <span className='text-gray-600'>Tauche in die Marktanalyse ein und lerne, wie wir unsere Marktanalyse anfertigen.</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Das Volumenprofil</span><br />
                      <span className='text-gray-600'>Richte unser Volumenprofil in der Software ein.</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Eigenständige Analysen</span><br />
                      <span className='text-gray-600'>Lerne, eigenständig Analysen durchzuführen und den Markt zu interpretieren</span>
                    </li>
                    <li>
                      <span className='text-tralgo-matisse-700'>Zusammenfassung der Phase "Die Marktanalyse"</span><br />
                      <span className='text-gray-600'>Mit dem Erlernen der Marktanalyse hast du einen weiteren Schritt zum profitablen Trader geschafft</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 id="section-2-title" className="sr-only">
                  Navigation im Themem-Bereich
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="p-6">
                    <img src="/img/tralgo-capital.png" alt="Tralgo-Capital Teaser" />
                    <p className='text-2xl text-tralgo-matisse-700 mb-2'>Prop-Trading auf einem neuen Level!</p>
                    <p className='mb-2 text-sm'>Als TRALGO Kunde hast du exklusiv die Möglichkeit von den einzigartigen Vorteilen von TRALGO Capital zu profitieren. Denn im Vergleich zu herkömmlichen Prop-Trading-Anbietern hast du kein pauschalisiertes Regelwerk, sondern die Interessen und stärken von DIR stehen im Vordergrund:</p>
                    <ul className='list-disc list-inside text-sm leading-6 mb-2'>
                      <li>Flexibles Regelwerk - DU Entscheidest!</li>
                      <li>Maßgeschneidertes Kontomodell - Für Scalper, Hybrid oder Intraday-Trader</li>
                      <li>KEINE Auszahlungslimits!</li>
                      <li>Sicherheit und Transparenz - Du kennst uns!</li>
                      <li>ATAS &amp; DxFeed in deiner Gebühr kostenfrei inklusive! </li>
                    </ul>
                    <p><b>Starte jetzt deine Reise für nur 247€, denk dran: "Günstig kauft sich zweimal"</b></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}