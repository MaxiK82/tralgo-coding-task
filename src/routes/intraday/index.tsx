import { createRoute, Link } from '@tanstack/react-router'
import { Route as RootRoute } from '@/routes/__root'
import { Layout } from '@/layouts/Layout'
import { Breadcrumb } from '@/components'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/intraday',
  component: () => {
    return (
      <Layout>
        <RouteComponent />
      </Layout>
    )
  },
})

const pages = [
  { name: 'Intraday', href: '/intraday/', current: true },
]

function RouteComponent() {
  return (
    <>
      <main className="-mt-24 pb-8">
        <Breadcrumb pages={pages} />
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
                  <p className='mb-4 font-bold text-2xl text-tralgo-matisse-700'>Dein Fortschritt im Intraday</p>
                  <ul className='list-disc list-inside leading-6'>
                    <li>Phase 3: Einführung in die Technik</li>
                    <li>Phase 2: Grundverständnis</li>
                    <li className='font-bold'><Link to='/intraday/marktanalyse'>Phase 4: Die Marktanalyse</Link></li>
                    <li>Phase 5: Die Arten des Managements</li>
                    <li>Phase 6: Einführung in die Handelsansätze</li>
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