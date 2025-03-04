import { getBaseURL } from './env'
import type { FormResponse } from '@/types/form'

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