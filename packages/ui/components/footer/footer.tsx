import type { FC, PropsWithChildren } from 'react'

const Footer: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-screen absolute bottom-0 p-2">
    <p className="text-xs text-center">{children}</p>
  </div>
)

export default Footer
