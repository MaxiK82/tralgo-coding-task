import { createRoute } from '@tanstack/react-router'
import { CheckIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Route as RootRoute } from '@/routes/__root'
import { Layout } from '@/layouts/Layout'
import { classNames } from '@/utils'
import { Breadcrumb, ProgressBar, VideoWrapper } from '@/components'

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
  path: '/intraday/marktanalyse/vorgehensweise-im-trading',
  component: () => {
    return (
      <Layout>
        <RouteComponent />
      </Layout>
    )
  },
})

const pages = [
  { name: 'Intraday', href: '/intraday/', current: false },
  { name: 'Phase 4: Die Marktanalyse', href: '/intraday/marktanalyse/', current: false },
  { name: 'Tradingarten und Stile', href: '/intraday/marktanalyse/vorgehensweise-im-trading/', current: true },
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
                  <p className='mb-4 font-bold text-2xl text-tralgo-matisse-700'>Vorgehensweisen im Trading</p>
                  <VideoWrapper youTubeUrl='https://www.youtube.com/embed/Tb3jCjNIemU?si=egdcnPiQyStqbSI_' />
                  <div className='flex justify-between mt-8'>
                    <button
                      type="button"
                      className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tralgo-matisse-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tralgo-matisse-300"
                    >
                      Vorherige Thema
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-tralgo-matisse-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-tralgo-matisse-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tralgo-matisse-300"
                    >
                      Nächste Thema
                    </button>
                  </div>
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 id="section-2-title" className="sr-only">
                  Navigation im Themem-Bereich
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow-sm mb-8">
                  <div className="p-6">
                    <ProgressBar headline='Fortschritt' progress='75' />
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="flow-root p-6">
                    <p className='mb-4 font-bold text-2xl text-tralgo-matisse-700'>Tradingarten und Stile</p>
                    <ul role="list" className="-mb-8">
                      {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                          <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                              <span aria-hidden="true" className="absolute top-3 left-3 -ml-px h-full w-0.5 bg-gray-200" />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    event.iconBackground,
                                    'flex size-6 items-center justify-center rounded-full ring-6 ring-white',
                                  )}
                                >
                                  <event.icon aria-hidden="true" className="size-3 text-white" />
                                </span>
                              </div>
                              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    {event.content}{' '}
                                    <a href={event.href} className="font-medium text-gray-900">
                                      {event.target}
                                    </a>
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  <div>{event.duration}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
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