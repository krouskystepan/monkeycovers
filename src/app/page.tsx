import Phone from '@/components/Phone'
import Wrapper from '@/components/Wrapper'
import { customers } from '@/constants/data'
import { Check, Star } from 'lucide-react'
import Image from 'next/image'

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
                <span className="bg-primary px-2 text-white">Custom</span> phone
                case
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Preserve your cherished moments with your unique,{' '}
                <span className="font-semibold">one-of-a-kind</span> phone case.
                MonkeyCovers enables you to safeguard your memories, not merely
                your phone.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
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
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  {customers.map((customer) => (
                    <Image
                      key={customer.imageLink}
                      src={customer.imageLink}
                      alt={'Customer image'}
                      className="inline-block size-10 rounded-full object-cover ring-2 ring-slate-100"
                      width={40}
                      height={40}
                    />
                  ))}
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
                imageSrc="/testimonials/1.png"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  )
}
