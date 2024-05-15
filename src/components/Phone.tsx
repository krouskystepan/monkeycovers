import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

export default function Phone({
  imgSrc,
  dark = false,
  className,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? // TODO: Edit dark version
              '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt={'Phone image'}
        className="pointer-events-none z-50 select-none"
        width={900}
        height={1850}
      />
      <div className="absolute inset-0 -z-10">
        <Image
          src={imgSrc}
          alt={'Phone image'}
          className="min-h-full min-w-full object-cover"
          fill
          sizes="256px"
        />
      </div>
    </div>
  )
}
