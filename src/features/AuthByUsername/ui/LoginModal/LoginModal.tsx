import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  )
}
