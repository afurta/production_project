import { LoginFormAsync } from '../../ui/LoginForm/LoginForm.async'
import { Suspense } from 'react'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Modal } from '@/shared/ui/redesigned/Modal'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
