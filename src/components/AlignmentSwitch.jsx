import { useContext } from "react";
import { ALIGNMENT } from "../utils/constant";
import toastContext from "../contexts/toastContext";

const AlignmentSwitch = () => {
  const { align, setAlign } = useContext(toastContext);

  return (
    <div className="flex gap-2 my-4 items-center">
      <div
        className={`flex h-10  bg-gray-500 p-1 rounded-2xl transition duration-500 ${
          align === ALIGNMENT.TOP ? "items-start" : "items-end"
        }`}
      >
        <div className={` w-4 h-4 rounded-full bg-white `} />
      </div>
      <div>
        <button
          onClick={() => setAlign(ALIGNMENT.TOP)}
          className={`hover:underline ${
            align === ALIGNMENT.TOP ? "" : "text-gray-400"
          }`}
        >
          Haut
        </button>
        /
        <button
          onClick={() => setAlign(ALIGNMENT.BOTTOM)}
          className={`hover:underline ${
            align === ALIGNMENT.BOTTOM ? "" : "text-gray-400"
          }`}
        >
          Bas
        </button>
      </div>
    </div>
  );
};
export default AlignmentSwitch;
