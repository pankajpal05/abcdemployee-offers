import { ChevronDown } from "lucide-react";

 const FormField = ({ icon: Icon, placeholder, type = 'text', value, onChange, options = [], isSelect = false, prefix = null }:{
  icon: React.ComponentType<any>,
  placeholder: string,
  type?: string,
  value: string,
  onChange: (e: React.ChangeEvent<any>) => void,
  options?: { label: string, value: string }[],
  isSelect?: boolean,
  prefix?: string | null
}) => {
  const commonClasses = "w-full text-white bg-[#ffffff1a] border border-[#e8e8e83d] focus:border-white focus:ring-0 rounded-xl px-4 py-3 shadow-inner placeholder-[#f2f2f2] focus:outline-none transition duration-150 font-normal text-sm";

  return (
    <div className="relative flex items-center mb-2.5">
      <Icon className="absolute z-20 left-4 w-5 h-5 text-white pointer-events-none" />

      {isSelect ? (
        <div className="relative w-full">
          <select
            className={`${commonClasses} appearance-none pr-10 pl-12 cursor-pointer`}
            value={value}
            onChange={onChange}
          >
            <option className='text-[#f2f2f2] bg-[#515151]' value="" disabled>{placeholder}</option>
            {options.map((option, index) => (
              <option className='text-[#f2f2f2] bg-[#515151]' key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
        </div>
      ) : (
        <div className="relative w-full">
          {prefix && (
            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-neutral-400 pr-2 border-r border-neutral-600 text-sm">
              {prefix}
            </span>
          )}
          <input
            type={type}
            placeholder={placeholder}
            className={`${commonClasses} ${prefix ? 'pl-20' : 'pl-12'}`}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
};

export default FormField;