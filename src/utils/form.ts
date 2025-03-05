import { getBaseURL } from './env'
import type { FormDetailResponse, FormResponse } from '@/types/form'

export async function fetchForm(slug: string): Promise<FormDetailResponse> {
  let response

  try {
    response = await fetch(`${getBaseURL()}/api/v1/form/${slug}`, {
      method: 'GET',
    })
  } catch {
    throw new Error('An error occurred. Please try again.')
  }

  if (response.status === 404) {
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

export async function fetchForms(): Promise<FormResponse> {
  const token = localStorage.getItem('token') || ''
  let response

  try {
    response = await fetch(`${getBaseURL()}/api/v1/form`, {
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
  } else if (!response.ok) {
    throw new Error('An error occurred. Please try again.')
  }

  try {
    return await response.json()
  } catch {
    throw new Error('An error occurred. Please try again.')
  }
}
