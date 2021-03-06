import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  isShowing: boolean
}

const modalRoot = document.querySelector('#modal-root')

export const Modal: React.FC<ModalProps> = ({ children, isShowing }) => {
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isShowing])

  return (
    modalRoot &&
    ReactDOM.createPortal(
      isShowing && (
        <div className="modal bg-gray-700 bg-opacity-95">
          <div className="flex justify-center items-center">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom py-8 px-12 text-gray-700 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              {children}
            </div>
          </div>
        </div>
      ),
      modalRoot
    )
  )
}
