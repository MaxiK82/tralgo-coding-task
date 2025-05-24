import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_academyLayout/academy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-[1920px] lg:px-8">
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