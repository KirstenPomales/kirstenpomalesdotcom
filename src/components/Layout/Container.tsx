import { ReactNode } from 'react'
import classNames from 'classnames'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={classNames('wrap', className)}>{children}</div>
}

export default Container
