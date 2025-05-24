import { createFileRoute } from '@tanstack/react-router'
import { HomeIcon } from '@heroicons/react/20/solid'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

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
                  <a href="/academy" className="text-gray-400 hover:text-gray-500">
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
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="p-6">
                    <iframe className='w-full aspect-video rounded-b-md' width="auto" height="auto" src="https://www.youtube.com/embed/Tb3jCjNIemU?si=egdcnPiQyStqbSI_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
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
                <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <div className="p-6">{/* Your content */}</div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}