import { createFileRoute } from '@tanstack/react-router'
import { VideoWrapper } from '../components'

export const Route = createFileRoute('/_mainLayout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="-mt-28">
      <header className="sr-only">
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
            <VideoWrapper youTubeUrl='https://www.youtube.com/embed/Tb3jCjNIemU?si=egdcnPiQyStqbSI_' className='mt-8 mb-6' />
          </div>
        </div>
      </main>
    </div>
  )
}