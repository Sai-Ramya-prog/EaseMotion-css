import React, { useEffect } from "react";
import "./style.css";

const ShimmerPulseModal = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
  closeOnOverlayClick = true,
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="shimmer-modal-overlay ease-fade-in"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        className="shimmer-modal-content ease-shimmer-pulse ease-hover-lift"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="shimmer-modal-title"
      >
        <div className="shimmer-modal-header">
          <h2 id="shimmer-modal-title">{title}</h2>
          <button
            className="shimmer-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="shimmer-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default ShimmerPulseModal;