import useToast from "./hooks/useToast";
import { RiNotificationLine } from "react-icons/ri";
import AlignmentSwitch from "./components/AlignmentSwitch";
import JustifyOptions from "./components/JustifyOptions";

function App() {
  const { addToast } = useToast();
  return (
    <div className="max-w-5xl mx-auto p-4">
      <button
        onClick={() => addToast()}
        className="active:outline  active:outline-slate-300 flex items-center gap-x-2 p-2  hover:border-t tet-white font-bold hover:shadow-xl transition duration-500"
      >
        <RiNotificationLine className="font-bold text-5xl" />
        Déclancher
      </button>
      <div className="mt-8">
        <h1 className="font-bold text-xl">Configurations</h1>
        <div className="pl-2 border-l">
          <h2>Direction de rendu</h2>
          <div className="text-sm flex items-center divide-x">
            <AlignmentSwitch />
            <JustifyOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
