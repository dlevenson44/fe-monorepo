import type { FC } from 'react'

const FooterContent: FC = () => (
  <div>
    <p>
      This website was built on notes taken from{' '}
      <a
        className={`font-medium text-sky-700`}
        href="https://www.khanacademy.org/computing/computer-science/algorithms"
      >
        Khan Academy's Algorithms course
      </a>
    </p>
  </div>
)

export default FooterContent
