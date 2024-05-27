'use client'

import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Confetti from 'react-dom-confetti'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Configuration } from '@prisma/client'
import { calculateTotalPrice, cn, formatPrice } from '@/lib/utils'
import Phone from '@/components/Phone'
import {
  COLORS,
  FINISHES,
  MATERIALS,
  MODELS,
} from '@/validators/option-validator'
import { BASE_PRICE } from '@/config/products'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { createCheckoutSession } from './actions'
import LoginModal from '@/components/LoginModal'

type Option = {
  readonly label: string
  readonly value: string
  readonly description?: string
  readonly price: number
}

const findOption = (
  options: readonly Option[],
  value: string
): Option | undefined => options.find((option) => option.value === value)

const renderPriceDetail = (price: number, description?: string) => (
  <div className="mt-2 flex items-center justify-between py-1">
    <div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
    <p className="font-medium text-foreground">{formatPrice(price / 100)}</p>
  </div>
)

export default function DesignPreview({
  configuration,
}: {
  configuration: Configuration
}) {
  const router = useRouter()
  const { toast } = useToast()
  const { id } = configuration
  const { user } = useKindeBrowserClient()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const [showConfetti, setShowConfetti] = useState(false)
  useEffect(() => setShowConfetti(true), [])

  const { color, model, finish, material } = configuration

  const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

  const { label: modelLabel } = MODELS.options.find(
    ({ value }) => value === model
  )!

  const { mutate: createPaymentSession } = useMutation({
    mutationKey: ['get-checkout-session'],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) router.push(url)
      else throw new Error('Unable to retrieve payment URL.')
    },
    onError: () => {
      toast({
        title: 'Something went wrong',
        description: 'There was an error on our end. Please try again.',
        variant: 'destructive',
      })
    },
  })

  const handleCheckout = () => {
    if (user) {
      // create payment session
      createPaymentSession({ configId: id })
    } else {
      // need to log in
      localStorage.setItem('configurationId', id)
      setIsLoginModalOpen(true)
    }
  }

  const selectedMaterial = findOption(MATERIALS.options, material!)
  const selectedFinish = findOption(FINISHES.options, finish!)

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none justify-center overflow-hidden"
      >
        <Confetti
          active={showConfetti}
          config={{ elementCount: 500, spread: 90 }}
        />
      </div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 flex flex-col items-center text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:grid md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 md:row-span-2 md:row-end-2 lg:col-span-3">
          <div className="rounded-[2.25rem] bg-accent p-6">
            <Phone
              className={cn(`bg-${tw}`, 'max-w-[150px] md:max-w-full')}
              imgSrc={configuration.croppedImageUrl!}
            />
          </div>
        </div>
        <div className="mt-6 sm:col-span-9 md:row-end-1">
          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            Your {modelLabel} Case
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="size-4 text-primary" />
            In stock and ready to ship
          </div>
        </div>

        <div className="text-base sm:col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 gap-y-8 border-b border-border py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className="font-medium text-foreground">Highlights</p>
              <ol className="mt-3 list-inside list-disc text-muted-foreground">
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Packaging made from recycled materials</li>
                <li>5 year print warranty</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-foreground">Materials</p>
              <ol className="mt-3 list-inside list-disc text-muted-foreground">
                <li>High-quality, durable material</li>
                <li>Scratch-and fingerprint resistant coating</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-secondary p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="mt-2 flex items-center justify-between py-1">
                  <p className="text-muted-foreground">Base price</p>
                  <p className="font-medium text-foreground">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {selectedMaterial &&
                  renderPriceDetail(
                    selectedMaterial.price,
                    selectedMaterial.description
                  )}
                {selectedFinish &&
                  renderPriceDetail(
                    selectedFinish.price,
                    selectedFinish.description
                  )}

                <div className="my-2 h-px bg-border dark:bg-background/80" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-foreground">Order total</p>
                  <p className="font-semibold text-foreground">
                    {formatPrice(calculateTotalPrice(material!, finish!) / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button onClick={handleCheckout} className="px-4 sm:px-6 lg:px-8">
                Check out <ArrowRight className="ml-1.5 inline size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
