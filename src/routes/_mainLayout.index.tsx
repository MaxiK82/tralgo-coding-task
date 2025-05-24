import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_mainLayout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="-mt-28">
      <header className="py-10 hidden">
        <h1 className="text-3xl font-bold tracking-tight text-white">Startseite</h1>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-4 pb-12 sm:px-6 lg:px-8 text-white">
          <div className="rounded-lg bg-tralgo-gray-950 px-5 py-6 shadow-sm sm:px-6 text-center">
            <h2 className='text-4xl mb-8'>Das einzige Trading-Konzept, das<br />
              echte Profite erzielt.</h2>
            <p className='text-md'>"Unsere Trades sind nicht nur Versprechen – sie sind Ergebnisse."<br />
              Erlebe messbare Erfolge und lerne von den Besten, die ihre<br />
              Gewinne kontinuierlich steigern.</p>
            <div className='mx-auto max-w-7xl mt-8 mb-8'>
              <iframe className='w-full aspect-video rounded-b-md' width="auto" height="auto" src="https://www.youtube.com/embed/Tb3jCjNIemU?si=egdcnPiQyStqbSI_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}