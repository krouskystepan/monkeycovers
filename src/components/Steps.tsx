'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const STEPS = [
  {
    name: 'Step 1: Add image',
    description: 'Choose an image for your case',
    url: '/upload',
  },
  {
    name: 'Step 2: Customize design',
    description: 'Make case yours',
    url: '/design',
  },
  {
    name: 'Step 3: Summary',
    description: 'Review your final design',
    url: '/preview',
  },
]

export default function Steps() {
  const pathname = usePathname()

  return (
    <ol className="rounded-md bg-background lg:flex lg:rounded-none lg:border-x lg:border-border">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url)
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        )
        const imgPath = `/monkey-${i + 1}.png`

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  'absolute left-0 top-0 h-full w-1 bg-secondary lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
                  {
                    'bg-foreground/50': isCurrent,
                    'bg-primary': isCompleted,
                  }
                )}
                aria-hidden="true"
              />

              <span
                className={cn(
                  i !== 0 ? 'lg:pl-9' : '',
                  'flex items-center px-6 py-4 text-sm font-medium'
                )}
              >
                <span className="shrink-0">
                  <Image
                    src={imgPath}
                    alt="Step Image"
                    width={128}
                    height={128}
                    className={cn(
                      'flex size-32 object-contain items-center justify-center',
                      {
                        'border-none': isCompleted,
                        'border-foreground': isCurrent,
                      }
                    )}
                  />
                </span>

                <span className="ml-4 mt-0.5 flex h-full min-w-0 flex-col justify-center">
                  <span
                    className={cn('text-sm font-semibold text-foreground', {
                      'text-primary': isCompleted,
                      'text-foreground': isCurrent,
                    })}
                  >
                    {step.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {step.description}
                  </span>
                </span>
              </span>

              {/* separator */}
              {i !== 0 ? (
                <div className="absolute inset-0 hidden w-5 lg:block">
                  <svg
                    className="size-full text-muted-foreground"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
