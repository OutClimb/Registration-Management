import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    if (localStorage.getItem('token') == null) {
      throw redirect({ to: '/login' })
    } else {
      throw redirect({ to: '/form' })
    }
  },
})
