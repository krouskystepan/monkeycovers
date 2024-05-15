import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import { buttonVariants } from './ui/button'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

export default function LoginModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[9999999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 size-36">
            <Image
              src="/monkey-4.png"
              alt="monkey image"
              className="object-contain"
              fill
            />
          </div>
          <DialogTitle className="text-center text-3xl font-bold tracking-tight text-foreground">
            Log in to continue
          </DialogTitle>
          <DialogDescription className="py-2 text-center text-base">
            <span className="font-medium text-foreground">
              Your configuration was saved!
            </span>{' '}
            Please login or create an account to complete your purchase.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          <LoginLink className={buttonVariants({ variant: 'outline' })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: 'default' })}>
            Sign up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  )
}
