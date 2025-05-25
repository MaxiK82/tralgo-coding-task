import { createFileRoute } from '@tanstack/react-router'
import { CheckIcon, HandThumbUpIcon, UserIcon, EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { HomeIcon } from '@heroicons/react/20/solid'
import { ProgressBar, VideoWrapper } from '../components'

const pages = [
  { name: 'Intraday', href: '#', current: false },
  { name: 'Phase 4: Die Marktanalyse', href: '#', current: true },
  { name: 'Tradingarten und Stile', href: '#', current: true },
]

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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const Route = createFileRoute('/_academyLayout/academy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="-mt-24 pb-8">
        <div className='mx-auto max-w-3xl lg:max-w-[1920px]'>
          <nav aria-label="Breadcrumb" className="flex border-b border-gray-200 bg-white max-w-3xl px-4 sm:px-6 lg:px-8 lg:max-w-[1856px] mb-8 mx-8 rounded-md">
            <ol role="list" className="mx-auto flex w-full space-x-4 px-4 sm:px-6 lg:px-8">
              <li className="flex">
                <div className="flex items-center">
                  <a href="/academy" className="text-tralgo-matisse-700 hover:text-gray-500">
                    <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name} className="flex">
                  <div className="flex items-center">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 44"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="h-full w-6 shrink-0 text-gray-200"
                    >
                      <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                    </svg>
                    <a
                      href={page.href}
                      aria-current={page.current ? 'page' : undefined}
                      className="ml-4 text-sm font-medium text-tralgo-matisse-700 hover:text-gray-700"
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
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