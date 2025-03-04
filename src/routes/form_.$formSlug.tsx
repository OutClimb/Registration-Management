import { fetchSubmissions } from '@/utils/submission'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/form_/$formSlug')({
  component: FormDetails,
  beforeLoad: async () => {
    if (localStorage.getItem('token') == null) {
      throw redirect({ to: '/login' })
    }
  },
  loader: async ({ params }) => {
    return fetchSubmissions(params.formSlug)
  },
})

function FormDetails() {
  // const data = Route.useLoaderData()
  return (
    <>
      <header className="mb-8 ml-12 md:ml-0">
        <h1 className="text-3xl font-bold tracking-tight"></h1>
      </header>
      <div className="rounded-lg border shadow-sm"></div>
    </>
  )
}
