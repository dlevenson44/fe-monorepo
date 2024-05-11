import { APP_NAME, APP_DESCRIPTION } from '@ui/configuration'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://i.imgur.com/W4JQGRl.png" sizes="any" />
        <link
          rel="icon"
          href="https://i.imgur.com/W4JQGRl.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="https://i.imgur.com/W4JQGRl.png"
          type="image/png"
          sizes="any"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
