import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  dark?: boolean
}

export default function Phone({
  imageSrc,
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
          src={imageSrc}
          alt={'Phone image'}
          className="object-cover"
          fill
        />
      </div>
    </div>
  )
}
