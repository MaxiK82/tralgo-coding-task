import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Error } from '../components'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: () => <Error />,
})