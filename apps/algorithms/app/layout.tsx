import { SharedRootLayout } from '@ui/components/'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Algorithms',
  description: 'Algorithms: learning algorithms made easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <SharedRootLayout>{children}</SharedRootLayout>
}
