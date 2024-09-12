import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/modal.module.less";

const Modal = ({ title, isOpen, closeModal, children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [slideModalOut, setSlideModalOut] = useState(false);

  const close = () => {
    setSlideModalOut(true);
    setTimeout(() => {
      if (closeModal && isModalOpen) closeModal();
      setSlideModalOut(false);
      setIsModalOpen(false);
    }, 300);
  };

  useEffect(() => {
    isOpen === true ? setIsModalOpen(true) : close();
  }, [isOpen, isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <>
      <div className={styles.bg} onClick={close} />

      <div className={styles.container}>
        <div className={styles.head}>
          <p className={styles.title}>{title}</p>
          <span
            className={styles.closeButton}
            id="modal-close-button"
            onClick={close}
          >
            <Image src="/images/close.svg" alt="close" width={24} height={24} />
          </span>
        </div>
        <div className={styles.lineWrapper}>
          <div className={styles.styledLine} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
