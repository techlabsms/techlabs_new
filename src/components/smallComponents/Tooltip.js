import React from "react"
import Modal from "react-modal"

const Tooltip = ({ modalIsOpen, closeModal, text, x, y }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={text}
        ariaHideApp={false}
        className="tooltip--modal"
        style={{
          content: {
            top: `${y}px`,
            left: `${x}px`,
            maxWidth: "100px",
            transform: "translate(-100%,50%)",
          },
          overlay: {
            backgroundColor: "none",
            zIndex: "1040",
          },
        }}
      >
        <small>{text}</small>
      </Modal>
    </>
  )
}

export default Tooltip
