import { Transition } from '@headlessui/react'
import React, { useEffect } from 'react'

interface ModalProps {
  isShowing: any
}

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
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
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
    </Transition>
  )
}
