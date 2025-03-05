import { FormsTable } from '@/components/forms-table'
import { fetchForms } from '@/utils/form'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/manage_/form')({
  component: Form,
  beforeLoad: async () => {
    if (localStorage.getItem('token') == null) {
      throw redirect({ to: '/manage/login' })
    }
  },
  head: () => ({
    meta: [
      {
        title: 'Forms | OutClimb Registration Management',
      },
    ],
  }),
  loader: () => fetchForms(),
})

function Form() {
  const data = Route.useLoaderData()
  return (
    <>
      <header className="mb-8 ml-12 md:ml-0">
        <h1 className="text-3xl font-bold tracking-tight">Forms</h1>
      </header>
      <div className="rounded-lg border shadow-sm">
        <FormsTable data={data} />
      </div>
    </>
  )
}
