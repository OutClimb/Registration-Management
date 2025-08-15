import type { UseNavigateResult } from '@tanstack/react-router'
import { redirect } from '@tanstack/react-router'
import { getBaseURL } from './env'
import { jwtDecode } from 'jwt-decode'
import { JwtClaims } from '@/types/user'

export async function fetchToken(username: string, password: string): Promise<string> {
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
      return await response.text()
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

  const claims = jwtDecode<JwtClaims>(token)
  return claims.user.role
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

  if (navigate) {
    navigate({ to: '/manage/login' })
  } else {
    throw redirect({ to: '/manage/login' })
  }
}
