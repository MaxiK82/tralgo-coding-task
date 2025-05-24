import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Layout } from '../layouts/Layout'

export const Route = createFileRoute('/_academyLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
