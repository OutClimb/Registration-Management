import type { SubmissionResponse } from '@/types/submission'
import { getBaseURL } from './env'
import { getToken } from './user'

export async function fetchSubmissions(formSlug: string): Promise<SubmissionResponse> {
  const token = getToken()
  let response

  try {
    response = await fetch(`${getBaseURL()}/api/v1/submission/${formSlug}`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
  } catch {
    throw new Error('An error occurred. Please try again.')
  }

  if (response.status === 401) {
    throw new Error('Unauthorized')
  } else if (response.status === 404) {
    throw new Error('Not Found')
  } else if (!response.ok) {
    throw new Error('An error occurred. Please try again.')
  }

  try {
    return await response.json()
  } catch {
    throw new Error('An error occurred. Please try again.')
  }
}

export async function deleteSubmission(submissionId: string): Promise<boolean> {
  const token = getToken()
  let response

  try {
    response = await fetch(`${getBaseURL()}/api/v1/submission/${submissionId}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    })
  } catch {
    throw new Error('An error occurred. Please try again.')
  }

  if (response.status === 401) {
    throw new Error('Unauthorized')
  } else if (!response.ok) {
    throw new Error('An error occurred. Please try again.')
  }

  return response.status === 200
}
