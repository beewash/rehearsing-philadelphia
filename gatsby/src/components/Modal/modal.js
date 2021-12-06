import React, { useState, forwardRef, useImperativeHandle } from "react"
import Portal from "../../utils/portal"

const Modal = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
      }
    }
  )

  const handleOpen = () => {
    setDisplay(true);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return (
      <Portal className="fixed inset-0">
          <div onClick={handleClose} className="fixed inset-0 bg-gray-500 opacity-50 z-40"></div>
          <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 w-9/12 md:w-6/12 z-50 bg-white border-2 border-black p-4">
            {props.children}
          </div>
      </Portal>
    )
  }

  return null
})

export default Modal