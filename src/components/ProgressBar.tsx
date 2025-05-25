interface IProgressBar {
  headline: string;
  progress: string;
}

export const ProgressBar = ({
  headline = "Headline",
  progress = '0',
}: IProgressBar) => {
  return (
    <div>
      <h4 className="sr-only">{headline}</h4>
      <p className="text-xl font-bold text-tralgo-matisse-700">{headline}</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${progress}%` }} className="h-2 rounded-full bg-tralgo-matisse-700" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-bold text-tralgo-matisse-700 sm:grid">
          <div> {progress}% Vollständig</div>
        </div>
      </div>
    </div>
  )
}