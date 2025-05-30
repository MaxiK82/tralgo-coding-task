import { HomeIcon } from '@heroicons/react/20/solid'

interface IPage {
  name: string,
  href: string,
  current: boolean
}

interface IBreadcrumb {
  pages: IPage[]
}

export const Breadcrumb = ({ pages }: IBreadcrumb) => {
  return (
    <div className='mx-auto max-w-3xl lg:max-w-[1920px]'>
      <nav aria-label="Breadcrumb" className="flex border-b border-gray-200 bg-white max-w-3xl px-4 sm:px-6 lg:px-8 lg:max-w-[1856px] mb-8 mx-8 rounded-md">
        <ol role="list" className="mx-auto flex w-full space-x-4 px-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <a href="/" className="text-tralgo-matisse-700 hover:text-gray-500">
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
                  className={`ml-4 text-sm  text-tralgo-matisse-700 hover:text-gray-700 ${page.current ? "font-bold" : "font-medium"}`}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}