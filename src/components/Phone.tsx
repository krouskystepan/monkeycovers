'use client'

/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { HTMLAttributes, Suspense } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}

export default function Phone({ imgSrc, className, ...props }: PhoneProps) {
  const { resolvedTheme } = useTheme()

  if (resolvedTheme === 'system' || !resolvedTheme) {
    return (
      <Suspense>
        <div
          className={cn(
            'relative pointer-events-none z-50 overflow-hidden',
            className
          )}
          {...props}
        >
          <img
            src={'/phone-template.png'}
            alt={'Phone image'}
            className="pointer-events-none z-50 select-none"
          />
        </div>
      </Suspense>
    )
  }

  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          resolvedTheme === 'dark'
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt={'Phone image'}
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute inset-0 -z-10">
        <img
          src={imgSrc}
          alt={'Phone image'}
          className="min-h-full min-w-full object-cover"
        />
      </div>
    </div>
  )
}
