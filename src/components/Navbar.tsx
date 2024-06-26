import Link from 'next/link'
import Wrapper from './Wrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import ThemeToggle from './ThemeToggle'

export default async function Navbar() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-border bg-background/85 backdrop-blur-lg transition-all">
      <Wrapper>
        <div className="flex h-14 items-center justify-between border-b border-border">
          <Link href="/" className="z-40 flex font-semibold">
            <span className="text-primary">Monkey</span>Covers
          </Link>

          <div className="flex h-full items-center space-x-3">
            <ThemeToggle />
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  Sign out
                </Link>
                {isAdmin && (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Dashboard ✨
                  </Link>
                )}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create Case
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ variant: 'ghost' })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    variant: 'ghost',
                  })}
                >
                  Login
                </Link>

                <div className="!mx-3 hidden h-8 w-px bg-secondary sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    className: 'hidden sm:flex items-center gap-1',
                  })}
                >
                  Create Case
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}
