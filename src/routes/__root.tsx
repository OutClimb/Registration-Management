import { Outlet, createRootRoute } from '@tanstack/react-router'

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
  return <Outlet />
}
