import Steps from '@/components/Steps'
import Wrapper from '@/components/Wrapper'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </Wrapper>
  )
}
