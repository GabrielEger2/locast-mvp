'use client'

import React, { ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEsc)

    return () => window.removeEventListener('keydown', closeOnEsc)
  }, [setIsOpen])

  return (
    <>
      {isOpen && (
        <div className="bg-slate-900/20 backdrop-blur w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center overflow-y-auto">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-0 left-0 w-full cursor-pointer h-full"
          />
          {children}
        </div>
      )}
    </>
  )
}

export default Modal
