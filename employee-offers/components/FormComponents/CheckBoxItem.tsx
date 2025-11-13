import { Check } from "lucide-react";

const CheckboxItem = ({ label, isChecked, onToggle }:{
  label: string | React.ReactNode,
  isChecked: boolean,
  onToggle: () => void
}) => (
  <div className="flex items-center mb-4 cursor-pointer" onClick={onToggle}>
    <div className={`
       flex-shrink-0 w-5 h-5 rounded-sm border-1 transition duration-150 ease-in-out
      ${isChecked
        ? 'bg-red-600 border-red-600'
        : 'bg-[#fff0] border-[#bdbdbd] '
      }
    `}>
      {isChecked && <Check className="w-4 h-4 text-[white] p-0.5 font-bold" />}
    </div>
    <label className="ml-3 text-sm font-light text-[#e0e0e0cc]">
      {label}
    </label>
  </div>
);
export default CheckboxItem