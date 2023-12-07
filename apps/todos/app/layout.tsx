import { SharedRootLayout } from '@ui/components/'
import { APP_NAME, APP_DESCRIPTION } from '@ui/configuration'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <SharedRootLayout>{children}</SharedRootLayout>
}
