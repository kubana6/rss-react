import React, { FC } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./type";
import "./Modal.scss";

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">{children}</div>
    </>,
    document.body
  );
};
