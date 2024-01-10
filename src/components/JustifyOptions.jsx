import { useContext } from "react";
import { JUSTIFY } from "../utils/constant";
import toastContext from "../contexts/toastContext";

const JustifyOptions = () => {
  const justifyData = [JUSTIFY.LEFT, JUSTIFY.CENTER, JUSTIFY.RIGHT];
  const { justify, setJustify } = useContext(toastContext);

  const styles = {
    optionDisable: "text-gray-400",
    optionActive: "underline",
    optionButton: "px-2",
  };

  const Button = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className={`${styles.optionButton} ${
        justify === label ? styles.optionActive : styles.optionDisable
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className="flex">
      {justifyData.map((data, index) => (
        <Button
          key={`${index}-justify-data-option-${data}}`}
          onClick={() => setJustify(data)}
          label={data}
        />
      ))}
    </div>
  );
};
export default JustifyOptions;
