import type { TokenResponse } from '@/types/user'
import type { UseNavigateResult } from '@tanstack/react-router'
import { redirect } from '@tanstack/react-router'
import { getBaseURL } from './env'
import { jwtDecode, JwtPayload } from 'jwt-decode'

interface Payload extends JwtPayload {
  user_id: string
  ip_address: string
  role: string
}

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

export function getRole(): string {
  const token = localStorage.getItem('token')
  if (!token) {
    return ''
  }

  const { role } = jwtDecode<Payload>(token)
  return role
}

export function getToken(required: boolean = true): string {
  const token = localStorage.getItem('token')
  if (!token && required) {
    throw new Error('Unauthorized')
  }
  return token || ''
}

export function logout(navigate?: UseNavigateResult<string>) {
  localStorage.removeItem('token')
  localStorage.removeItem('user')

  if (navigate) {
    navigate({ to: '/manage/login' })
  } else {
    throw redirect({ to: '/manage/login' })
  }
}
