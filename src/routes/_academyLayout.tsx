import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_academyLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Outlet /></div>
}
