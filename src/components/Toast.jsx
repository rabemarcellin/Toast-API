import React, { useState, useEffect, useContext } from "react";
import { MdClear } from "react-icons/md";
import toastContext from "../contexts/toastContext";
import { ALIGNMENT, JUSTIFY } from "../utils/constant";

export default function Toast({ message }) {
  const { align, justify, setMessage } = useContext(toastContext);
  const [position, setPosition] = useState("");

  useEffect(() => {
    setPosition(`${
      align === ALIGNMENT.TOP
        ? "top-0 translate-y-2"
        : "bottom-0 -translate-y-2"
    } ${
      justify === JUSTIFY.LEFT
        ? "left-0 translate-x-2 "
        : justify === JUSTIFY.RIGHT
        ? "right-0 -translate-x-2 "
        : " left-0 right-0 max-w-max mx-auto"
    }
         }`);
  }, [align, justify, position]);

  return (
    <div className={`absolute ${position} border-2 bg-gray-100  p-4 rounded`}>
      <div className="flex gap-4">
        <div className="flex-1 text-sm font-bold">{message}</div>
        <div>
          <button onClick={() => setMessage(null)}>
            <MdClear />
          </button>
        </div>
      </div>
    </div>
  );
}
