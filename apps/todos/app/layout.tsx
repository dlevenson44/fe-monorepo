import { SharedRootLayout } from '@ui/components/'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'ToDos',
    description:
        'To Do Application, application that lets you create, modify, and delete tasks YOU need to keep track of',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): JSX.Element {
    return <SharedRootLayout>{children}</SharedRootLayout>
}
