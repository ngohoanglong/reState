import { useState, useEffect, useContext, useRef, useCallback } from "react";
import React from "react";

const useModal = (open, modalId) => {
  const idRef = useRef(modalId || Date.now());
  useEffect(() => {
    const modalId = idRef.current;
    if (!window.listModal) window.listModal = [];
    if (open) {
      let listModal = window.listModal;
      window.requestAnimationFrame(() => {
        listModal.push(modalId);
        if (!listModal || listModal.length === 1) {
          const node = document.body;
          if (node) {
            node.style.overflow = "hidden";
            node.style.width = "100%";
          }
        }
      });
    } else {
      let listModal = window.listModal;
      window.listModal = listModal.filter(id => id !== modalId);
      if (!window.listModal || window.listModal.length === 0) {
        const node = document.body;
        if (node) {
          node.style.top = null;
          node.style.overflow = null;
        }
      }
    }
    return () => {
      let listModal = window.listModal;
      window.listModal = listModal.filter(id => id !== modalId);
      if (!window.listModal || window.listModal.length === 0) {
        const node = document.body;
        if (node) {
          node.style.top = null;
          node.style.overflow = null;
        }
      }
    };
  }, [open]);
};
export default useModal;
