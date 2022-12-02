import { useEffect, useState } from 'react'
import './Modal.scss'

export const Modal = ({ isOpen, setIsOpen, children }) => {
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
