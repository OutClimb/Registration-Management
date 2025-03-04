import type { TokenResponse } from '@/types/token'
import { getBaseURL } from './env'

export async function fetchToken(username: string, password: string): Promise<TokenResponse> {
  try {
    const formData = {
      username,
      password,
    }
    const response = await fetch(`${getBaseURL()}/api/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
