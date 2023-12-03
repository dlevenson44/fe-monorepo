import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ToDos',
    description:
        'To Do Application, application that lets you create, modify, and delete tasks YOU need to keep track of',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="https://i.imgur.com/W4JQGRl.png"
                    sizes="any"
                />
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
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
