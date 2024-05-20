import { Icons } from '@/components/Icons'
import Phone from '@/components/Phone'
import Reviews from '@/components/Reviews'
import Wrapper from '@/components/Wrapper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-secondary">
      <section>
        <Wrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="absolute left-8 top-[-66px] hidden w-28 lg:block">
                <Image
                  src="/monkey-1.png"
                  alt="logo"
                  className="w-full"
                  width={125}
                  height={125}
                />
              </div>
              <h1 className="relative w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-secondary-foreground md:text-6xl lg:text-7xl">
                Your image on a{' '}
                <span className="bg-primary px-2 text-background">Custom</span>{' '}
                phone case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Preserve your cherished moments with your unique,{' '}
                <span className="font-semibold">one-of-a-kind</span> phone case.
                MonkeyCovers enables you to safeguard your memories, not merely
                your phone.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-primary" />
                  Premium craftsmanship and durability
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-primary" />
                  Guaranteed quality for 5 years
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-primary" />
                  Compatible with the latest iPhone models
                </li>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <Image
                    src={'/users/user-1.jpg'}
                    alt={'Customer image'}
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={'/users/user-2.jpg'}
                    alt={'Customer image'}
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={'/users/user-3.jpg'}
                    alt={'Customer image'}
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={'/users/user-4.jpg'}
                    alt={'Customer image'}
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={'/users/user-5.jpg'}
                    alt={'Customer image'}
                    className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  <p>
                    <span className="font-semibold">2.750</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <Image
                src={'/your-image.png'}
                alt="Image"
                className="absolute -top-20 left-56 hidden w-40 select-none md:block lg:hidden lg:w-52 2xl:block"
                width={620}
                height={430}
              />
              <Image
                src={'/line.png'}
                alt="Image"
                className="absolute -bottom-6 -left-6 w-20 select-none"
                width={340}
                height={610}
              />
              <Phone
                className="w-64 select-none"
                imgSrc="/testimonials/1.jpg"
              />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="bg-background py-24">
        <Wrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-0 lg:flex-row lg:gap-4">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-foreground md:text-6xl">
              What our{' '}
              <span className="relative inline-block px-2">
                customers
                <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden w-full text-primary sm:block" />
              </span>{' '}
              say
            </h2>
            <Image
              src={'/monkey-2.png'}
              alt="Monkey Image"
              className="order-none w-32 lg:order-2 lg:w-24"
              width={100}
              height={100}
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on
                  the design. Had the case for two and a half months now and{' '}
                  <span className="bg-foreground p-0.5 text-background">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it.&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  src={'/users/user-1.jpg'}
                  alt="User"
                  className="size-12 rounded-full object-cover"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Mario</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Check className="size-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
                <Star className="size-5 fill-primary text-primary" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;This case? It&apos;s like armor for my device, and
                  it&apos;s been turning heads with its sleek design. Time
                  flies, and yet{' '}
                  <span className="bg-foreground p-0.5 text-background">
                    the graphics are still popping
                  </span>{' '}
                  as if it&apos;s day one. Remember my old case? It barely
                  lasted a moon cycle before the visuals started to fade into
                  oblivion, leaving behind a blurry mess. This one? It&apos;s a
                  visual feast that refuses to dim its brilliance.&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <Image
                  src={'/users/user-2.jpg'}
                  alt="User"
                  className="size-12 rounded-full object-cover"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Annetta</p>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Check className="size-4 stroke-[3px] text-primary" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <Wrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-foreground md:text-6xl">
                Upload your photo and get{' '}
                <span className="bg-primary px-2 text-background">
                  your own case
                </span>{' '}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
              <Image
                src={'/arrow.png'}
                width={130}
                height={35}
                alt="Arrow"
                className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
              />
              <div className="relative h-80 max-w-sm rounded-xl bg-foreground/5 ring ring-inset ring-foreground/5 md:h-full md:justify-self-end lg:rounded-2xl">
                <Image
                  src={'/dog.jpg'}
                  alt="Image"
                  width={400}
                  height={400}
                  className="size-full rounded-md bg-background object-cover object-bottom shadow-2xl ring-1 ring-foreground/10 md:w-60"
                />
              </div>
              <Phone className="w-60" imgSrc="/dog-phone.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-primary" />
              Premium-grade silicone material
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-primary" />
              Wireless capability
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-primary" />
              Scratch and fingerprint-resistant
            </li>
            <li className="w-fit">
              <Check className="mr-1.5 inline size-5 text-primary" />
              Print warranty for 3 years
            </li>
          </ul>
          <div className="flex justify-center">
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: 'lg',
                className: 'mx-auto mt-8',
              })}
            >
              Create your case now <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </div>
        </Wrapper>
      </section>
    </div>
  )
}
