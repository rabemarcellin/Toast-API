import { useContext } from "react";
import toastContext from "../contexts/toastContext";

export default function useToast() {
  const data = useContext(toastContext);
  const { setMessage } = data;

  return {
    addToast: (message) => {
      setMessage(message || "Ceci est une notification");
    },
  };
}
