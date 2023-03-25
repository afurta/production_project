import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  root?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const { children, root = document.body } = props

  return createPortal(children, root)
}
