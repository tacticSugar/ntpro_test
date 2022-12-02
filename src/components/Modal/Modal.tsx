import './Modal.scss'

type ModalProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <div
      className={isOpen ? 'modal active' : 'modal'}
      onClick={() => setIsOpen(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
