import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import toastContext from "../contexts/toastContext";
import Toast from "../components/Toast";
import { ALIGNMENT } from "../utils/constant";
import { JUSTIFY } from "../utils/constant";

export default function ToastProvider({ children }) {
  const SHOW_DELAY = 3000;
  const [showToast, triggerToast] = useState(false);
  const [message, setMessage] = useState(null);
  const [align, setAlign] = useState(ALIGNMENT.TOP);
  const [justify, setJustify] = useState(JUSTIFY.LEFT);

  useEffect(() => {
    console.log(message);
    if (message) {
      triggerToast(true);
    }
  }, [message]);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        triggerToast(false);
        setMessage(null);
      }, SHOW_DELAY);
    }
  }, [showToast]);

  return (
    <toastContext.Provider
      value={{
        message,
        setMessage,
        align,
        setAlign,
        justify,
        setJustify,
      }}
    >
      {children}
      {showToast &&
        message &&
        createPortal(<Toast message={message} />, document.body)}
    </toastContext.Provider>
  );
}
