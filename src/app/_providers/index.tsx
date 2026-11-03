'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { CartProvider } from '../_providers/Cart'
import { PostHogProvider } from './PostHog'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PostHogProvider>
          <CartProvider>{children}</CartProvider>
        </PostHogProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
