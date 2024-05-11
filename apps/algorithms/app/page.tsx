import { Footer } from '@ui/components/footer'

import { FooterContent } from '~/components/root'

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300">
      <Footer>
        <FooterContent />
      </Footer>
    </main>
  )
}
