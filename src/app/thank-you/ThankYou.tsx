'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { getPaymentStatus } from './actions'

export default function ThankYou() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || ''

  const { data } = useQuery({
    queryKey: ['get-payment-status'],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  })

  if (data === undefined) {
    return (
      <div className="mt-24 flex w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
          <h3 className="text-xl font-semibold">Loading your order...</h3>
          <p>This won&apos;t take long.</p>
        </div>
      </div>
    )
  }

  if (data === false) {
    return (
      <div className="mt-24 flex w-full justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="size-8 animate-spin text-muted-foreground" />
          <h3 className="text-xl font-semibold">Verifying your payment...</h3>
          <p>This might take a moment.</p>
        </div>
      </div>
    )
  }

  const { billingAddress, shippingAddress, amount } = data

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="text-base font-medium text-primary">Thank you!</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your case is on the way!
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            We&apos;ve received your order and are now processing it.
          </p>

          <div className="mt-6 text-sm font-medium">
            <p className="text-foreground">Order number</p>
            <p className="mt-2 text-muted-foreground">{orderId}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-foreground">
              You made a great choice!
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you for choosing MonkeyCovers! We&apos;re committed to
              providing you with phone cases that combine style and durability.
              Enjoy peace of mind with our 5-year print guarantee. If your case
              doesn&apos;t meet our quality standards, we&apos;ll happily
              replace it for free.
            </p>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-6 py-10 text-sm">
            <div>
              <p className="font-medium text-foreground">Shipping address</p>
              <div className="mt-2 text-foreground/70">
                <address className="not-italic">
                  <span className="block">{shippingAddress?.name}</span>
                  <span className="block">{shippingAddress?.street}</span>
                  <span className="block">
                    {shippingAddress?.postalCode} {shippingAddress?.city}
                  </span>
                </address>
              </div>
            </div>
            <div>
              <p className="font-medium text-foreground">Billing address</p>
              <div className="mt-2 text-foreground/70">
                <address className="not-italic">
                  <span className="block">{billingAddress?.name}</span>
                  <span className="block">{billingAddress?.street}</span>
                  <span className="block">
                    {billingAddress?.postalCode} {billingAddress?.city}
                  </span>
                </address>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 border-t border-border py-10 text-sm">
            <div>
              <p className="font-medium text-foreground">Payment status</p>
              <p className="mt-2 text-foreground/70">Paid</p>
            </div>

            <div>
              <p className="font-medium text-foreground">Shipping Method</p>
              <p className="mt-2 text-foreground/70">
                DHL, takes up to 3 working days
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-border pt-10 text-sm">
          <div className="flex justify-between">
            <p className="font-medium text-foreground">Subtotal</p>
            <p className="text-foreground/70">{formatPrice(amount)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-foreground">Shipping</p>
            <p className="text-foreground/70">{formatPrice(0)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-foreground">Total</p>
            <p className="text-foreground/70">{formatPrice(amount)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
