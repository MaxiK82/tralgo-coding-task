import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/results')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="-mt-28">
      <header className="py-10 hidden">
        <h1 className="text-3xl font-bold tracking-tight text-white">Ergebnisse</h1>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-4 pb-12 sm:px-6 lg:px-8 text-white">
          <div className="rounded-lg bg-tralgo-gray-950 px-5 py-6 shadow-sm sm:px-6 text-center">
            <h2 className='text-4xl mb-8'>Ergebnisse, die für sich sprechen: Deine<br /> Zukunft im Trading beginnt hier!
            </h2>
            <p className='text-md'>Von beeindruckenden Renditen bis hin zu detaillierten Performance-Berichten – hier teilen wir die echten Zahlen und Ergebnisse, die unsere Arbeit<br /> und unser Engagement für deinen Erfolg belegen.<br />
              Kein "Marketing-Geschwätz", nur pure, messbare Erfolge.</p>
            <div className='mx-auto max-w-7xl mt-8 mb-8'>
              <iframe className='w-full aspect-video rounded-b-md' width="auto" height="auto" src="https://www.youtube.com/embed/vVi2haWAu_0?si=OqpFolU1SqFYuXtb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}