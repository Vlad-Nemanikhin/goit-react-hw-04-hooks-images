import { Overlay, ModalMarkup } from "./modal.styled";
import { createPortal } from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onCloseModal, selectedImage }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    disableBodyScroll(modalRoot);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      enableBodyScroll(modalRoot);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseModal();
    }
  };

  const handleClickModal = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleClickModal}>
      <ModalMarkup>
        <img src={selectedImage} alt="" />
      </ModalMarkup>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.string,
};
