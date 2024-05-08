import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-8">
      <div className="relative flex flex-col space-y-3 text-center">
        <Image
          src={'/monkey-4.png'}
          width={150}
          height={150}
          alt="Monkey img"
          className="mx-auto sm:absolute sm:-right-4 sm:top-[-98px]"
        />
        <h1 className="text-5xl font-bold">404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link
          className={buttonVariants({ className: 'w-full sm:w-fit mx-auto' })}
          href={'/'}
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}
