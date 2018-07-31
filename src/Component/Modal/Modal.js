import './Modal.css'
import * as React from 'react'
import { MdClose as CloseIcon } from 'react-icons/lib/md'

const Modal = ({ title, close, children }) => (
  <div className="Modal">
    <div className="Content">
      <div className="title">
        {title}
        <CloseIcon size="36" onClick={close} />
      </div>
      <div className="body">
        {children}
      </div>
    </div>
  </div>
)

export default Modal