'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactNode } from 'react'

const client = new QueryClient()

export default function QueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
