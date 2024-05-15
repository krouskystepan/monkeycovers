'use client'

import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Confetti from 'react-dom-confetti'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Configuration } from '@prisma/client'
import { cn, formatPrice } from '@/lib/utils'
import Phone from '@/components/Phone'
import { COLORS, MODELS } from '@/validators/option-validator'
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/products'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

  let totalPrice = BASE_PRICE
  if (material === 'polycarbonate')
    totalPrice += PRODUCT_PRICES.material.polycarbonate
  if (finish === 'textured') totalPrice += PRODUCT_PRICES.finish.textured

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

      <div className="mt-20 flex flex-col items-center text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:grid md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 md:row-span-2 md:row-end-2 lg:col-span-3">
          <Phone
            className={cn(
              `bg-${tw}`,
              'max-w-[150px] md:max-w-full rounded-[2.35rem]'
            )}
            imgSrc={configuration.croppedImageUrl!}
          />
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
              <ol className="mt-3 list-inside list-disc text-zinc-700">
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

                {finish === 'textured' && (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-muted-foreground">Textured finish</p>
                    <p className="font-medium text-foreground">
                      {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                    </p>
                  </div>
                )}

                {material === 'polycarbonate' && (
                  <div className="mt-2 flex items-center justify-between py-1">
                    <p className="text-muted-foreground">
                      Soft polycarbonate material
                    </p>
                    <p className="font-medium text-foreground">
                      {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                    </p>
                  </div>
                )}

                <div className="my-2 h-px bg-border" />

                <div className="flex items-center justify-between py-2">
                  <p className="font-semibold text-foreground">Order total</p>
                  <p className="font-semibold text-foreground">
                    {formatPrice(totalPrice / 100)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end pb-12">
              <Button
                // disabled
                // isLoading={true}
                // loadingText="loading"
                // onClick={() => handleCheckout()}
                className="px-4 sm:px-6 lg:px-8"
              >
                Check out <ArrowRight className="ml-1.5 inline size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}