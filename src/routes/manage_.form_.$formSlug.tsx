import { SubmissionsTable } from '@/components/submissions-table'
import { fetchForm } from '@/utils/form'
import { fetchSubmissions } from '@/utils/submission'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { FormDetailsTable } from '@/components/form-details-table'
import { Button } from '@/components/ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import { FormDetailResponse } from '@/types/form'
import { SubmissionResponse } from '@/types/submission'

export const Route = createFileRoute('/manage_/form_/$formSlug')({
  component: FormDetails,
  beforeLoad: async () => {
    if (localStorage.getItem('token') == null) {
      throw redirect({ to: '/manage/login' })
    }
  },
  head: ({ loaderData }) => {
    const data = loaderData as unknown as { form: FormDetailResponse, submissions: SubmissionResponse }

    return {
      meta: [
        {
          title: `${data.form.name || 'Form'} | OutClimb Registration Management`,
        },
      ],
    }
  },
  loader: async ({ params }) => {
    try {
      return {
        form: await fetchForm(params.formSlug),
        submissions: await fetchSubmissions(params.formSlug),
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'Unauthorized') {
        localStorage.removeItem('token')
        throw redirect({ to: '/manage/login' })
      } else if (error instanceof Error && error.message === 'Not Found') {
        throw redirect({ to: '/manage/form' })
      }

      throw error
    }
  },
})

function FormDetails() {
  const data = Route.useLoaderData() as unknown as { form: FormDetailResponse, submissions: SubmissionResponse }

  const handleVisit = () => {
    window.open(`/form/${data.form.slug}`, '_blank')
  }

  return (
    <>
      <header className="mb-8 ml-12 md:ml-0">
        <h1 className="flex text-3xl font-bold tracking-tight">
          <span className="flex-auto">{data.form.name}</span>
          <Button variant="outline" onClick={handleVisit}>
            <SquareArrowOutUpRight />
            Visit
          </Button>
        </h1>
      </header>
      <div className="mb-8 rounded-lg border shadow-sm">
        <FormDetailsTable form={data.form} />
      </div>
      <div className="rounded-lg border shadow-sm">
        <SubmissionsTable form={data.form} submissions={data.submissions} />
      </div>
    </>
  )
}
