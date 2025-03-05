import { getBaseURL } from './env'
import type { FormDetailResponse, FormResponse } from '@/types/form'

export async function fetchForm(slug: string): Promise<FormDetailResponse> {
  try {
    const response = await fetch(`${getBaseURL()}/api/v1/form/${slug}`, {
      method: 'GET',
    })
    if (response.status >= 300) {
      throw new Error('An error occurred. Please try again.')
    } else {
      return await response.json()
    }
  } catch {
    throw new Error('An error occurred. Please try again.')
  }
}

export async function fetchForms(): Promise<FormResponse> {
  try {
    const token = localStorage.getItem('token') || ''
    const response = await fetch(`${getBaseURL()}/api/v1/form`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
    if (response.status === 401) {
      throw new Error('Unauthorized')
    } else if (response.status >= 300) {
      throw new Error('An error occurred. Please try again.')
    } else {
      return await response.json()
    }
  } catch {
    throw new Error('An error occurred. Please try again.')
  }
}
