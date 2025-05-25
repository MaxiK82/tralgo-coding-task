import { Link } from '@tanstack/react-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Footer } from '@/components'

const navigation = [
	{ name: 'Startseite', href: '/' },
	{ name: 'Ergebnisse', href: '/results' },
	{ name: 'Academy', href: '/intraday' },
]

export const Layout = ({ children }: any) => (
	<div className="min-h-full">
		<div className="bg-tralgo-gray-950 pb-32">
			<Disclosure as="nav" className="bg-tralgo-gray-950">
				<div className="mx-auto lg:max-w-[1920px] sm:px-6 lg:px-8">
					<div className="p-3">
						<div className="flex h-16 items-center justify-between px-4 sm:px-0">
							<div className="flex items-center">
								<div className="shrink-0">
									<a href='/' target="_self" rel="noopener noreferrer">
										<img
											alt="Your Company"
											src="/img/logo.png"
											className="w-20"
										/>
									</a>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4 text-white">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className='rounded-md px-3 py-2 text-lg hover:text-tralgo-blue-500'
												activeOptions={{ includeHash: true }}
												activeProps={{
													className: 'text-tralgo-blue-500',
												}}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="-mr-2 flex md:hidden">
								<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-tralgo-gray-950 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									<Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
									<XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
								</DisclosureButton>
							</div>
						</div>
					</div>
				</div>
				<DisclosurePanel className="border-b border-gray-700 md:hidden">
					<div className="space-y-1 px-2 py-3 sm:px-3">
						{navigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as={Link}
								href={item.href}
								className='rounded-md px-3 py-2 text-sm font-bold text-white hover:text-tralgo-blue-500'
							>
								{item.name}
							</DisclosureButton>
						))}
					</div>
				</DisclosurePanel>
			</Disclosure>
		</div>
		{children}
		<Footer />
	</div>

)