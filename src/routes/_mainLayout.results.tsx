import { createFileRoute } from '@tanstack/react-router'
import { VideoWrapper } from '../components'

export const Route = createFileRoute('/_mainLayout/results')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="-mt-28">
      <header className="sr-only">
        <h1 className="text-3xl font-bold tracking-tight text-white">Ergebnisse</h1>
      </header>
      <main>
        <div className="mx-auto max-w-8xl px-4 pb-12 sm:px-6 lg:px-8 text-white">
          <div className="rounded-lg bg-tralgo-gray-950 px-5 py-6 shadow-sm sm:px-6 text-center">
            <h2 className='text-4xl mb-8'>Ergebnisse, die für sich sprechen: Deine<br /> Zukunft im Trading beginnt hier!
            </h2>
            <p className='text-md'>Von beeindruckenden Renditen bis hin zu detaillierten Performance-Berichten – hier teilen wir die echten Zahlen und Ergebnisse, die unsere Arbeit<br /> und unser Engagement für deinen Erfolg belegen.<br />
              Kein "Marketing-Geschwätz", nur pure, messbare Erfolge.</p>
            <VideoWrapper youTubeUrl='https://www.youtube.com/embed/vVi2haWAu_0?si=OqpFolU1SqFYuXtb' className='mt-8 mb-6' />
          </div>
        </div>
      </main>
    </div>
  )
}