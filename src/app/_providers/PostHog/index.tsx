'use client'

import React, { useEffect } from 'react'
import posthog from 'posthog-js'

import { useAuth } from '../Auth'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN

export const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, status } = useAuth()

  useEffect(() => {
    if (!token || posthog.__loaded) return

    posthog.init(token, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      defaults: '2026-08-30',
    })
  }, [])

  useEffect(() => {
    if (!token) return

    if (user?.id) {
      posthog.identify(user.id)
    } else if (status === 'loggedOut') {
      posthog.reset()
    }
  }, [user?.id, status])

  return <>{children}</>
}
