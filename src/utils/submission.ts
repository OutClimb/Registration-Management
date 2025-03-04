import type { SubmissionResponse } from '@/types/submission'
import { getBaseURL } from './env'

export async function fetchSubmissions(formSlug: string): Promise<SubmissionResponse> {
    try {
        const token = localStorage.getItem('token') || ''
        const response = await fetch(`${getBaseURL()}/api/v1/submission/${formSlug}`, {
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