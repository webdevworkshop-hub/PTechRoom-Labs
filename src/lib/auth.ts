// src/lib/auth.ts

import config from '@payload-config'
import { getPayload } from 'payload'
import { cookies, headers } from 'next/headers'

export async function getCurrentUser() {
  const payload = await getPayload({ config })

  const { user } = await payload.auth({
    headers: await headers(),
  })

  return user
}
