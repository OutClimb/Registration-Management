import { Navigation } from '@/components/navigation'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
  head: () => ({
    meta: [
      {
        title: 'OutClimb Registration Management',
      },
    ],
  }),
})

function Root() {
  const location = useLocation()

  if (location.pathname === '/manage/login') {
    return <Outlet />
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Navigation />
      <div className="flex-1">
        <div className="flex min-h-screen flex-col md:flex-row">
          <main className="flex-1 p-6 md:p-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
