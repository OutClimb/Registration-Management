/* oxlint-disable eslint-plugin-react/only-export-components */

import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/manage_/')({
  beforeLoad: async () => {
    if (localStorage.getItem('token') == null) {
      throw redirect({ to: '/manage/login' })
    } else {
      throw redirect({ to: '/manage/form' })
    }
  },
})
