"use client"
import {   useState } from 'react';
import { LayoutGrid, User, Mail, Building, MapPin, Smartphone, } from 'lucide-react';
import FormField from '../FormField/FormField';
import CheckboxItem from '../CheckBoxItem/CheckBoxItem';
import { ADVANTAGE_EMPLOYEE_OFFERS_COMPANY_OPTIONS, ADVANTAGE_EMPLOYEE_OFFERS_TYPE_OF_PRODUCTS, PRODUCT_CONFIG } from '@/constant/constant';
import { validateForm } from '@/utils/common.util';
import OtpVerification from './OtpVerification';
import { generateOTPService } from '@/services/authentication.service';


export interface FormDataType {
  productType: string;
  fullName: string;
  emailId: string;
  companyName: string;
  pincode: string;
  mobileNumber: string;
  agreeTerms: boolean;
  getUpdates: boolean;
}

const EmployeeForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    productType: '',
    fullName: '',
    emailId: '',
    companyName: '',
    pincode: '',
    mobileNumber: '',
    agreeTerms: false,
    getUpdates: false,
  });
 const [error, setError] = useState<string>("");
 const [isFormTouched, setIsFormTouched] = useState(false);
const [showOtpScreen, setShowOtpScreen] = useState(false);

  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
setIsFormTouched(true);
  const updatedData = {
    ...formData,
    [name]: value,
  };
  console.log("Updated form data:", updatedData);

  setFormData(updatedData);
  const validationMessage = validateForm(updatedData);
  setError(validationMessage);
};

  const toggleCheckbox = (key: "agreeTerms" | "getUpdates") => {
    setIsFormTouched(true);
    const updatedData = {
      ...formData,
      [key]: !formData[key],
    };
    setFormData(updatedData);
    setError(validateForm(updatedData));
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationMessage = validateForm(formData);
    setError(validationMessage);
    if (validationMessage === "") {
      console.log("Form Submitted Successfully: ", formData);
      setShowOtpScreen(true);
       await generateOTPService(formData.mobileNumber)
    }
  };

  
  const isFormValid = error === "" && isFormTouched;
  return (
    <div className=" flex justify-end">
      {showOtpScreen ? (
        <OtpVerification formData={formData} />
      ) : (
      <div className="w-full lg:w-[431px] text-white rounded-2xl p-6 lg:p-[35px]"
        style={{
          background: 'radial-gradient(92.49% 103.55% at 89.79% 89.84%, rgba(79, 79, 79, 0.9) 0%, rgba(17, 17, 17, 0.9) 100%)'
       ,
        }}
      >
        <h1 className="text-[25px] xl:text-[28px] lg:pr-10 font-medium text-white mb-2.5 leading-tight">
          Dear Employee, Get Started To Unlock The Best Offers!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4'>
            <FormField
              icon={LayoutGrid}
              placeholder="Type Of Product"
              isSelect={true}
              name="productType"
              value={formData.productType}
              onChange={handleInputChange}
              options={ADVANTAGE_EMPLOYEE_OFFERS_TYPE_OF_PRODUCTS}
            />

            <FormField
              icon={User}
              placeholder="Enter Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />

            <FormField
              icon={Mail}
              placeholder="Enter Email ID"
              type="email"
               name="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
            />

            <FormField
              icon={Building}
              placeholder="Company Name"
              isSelect={true}
               name="companyName"
              value={formData.companyName}
            onChange={handleInputChange}
              options={ADVANTAGE_EMPLOYEE_OFFERS_COMPANY_OPTIONS}
            />

            <FormField
              icon={MapPin}
              placeholder="Enter Your Pincode"
              type="text"
              name="pincode"
              value={formData.pincode}
             onChange={handleInputChange}
            />
            <FormField
              icon={Smartphone}
              placeholder="Enter Mobile Number"
              type="tel"
              prefix="+91"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>

            {/* Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-2 mb-2.5">
            <CheckboxItem
              label={
                <p className="text-xs">
                  I agree to the{" "}
                  <a href="#" className="font-bold text-white underline">
                    Terms and Conditions.
                  </a>
                </p>
              }
              isChecked={formData.agreeTerms}
               onToggle={() => toggleCheckbox("agreeTerms")}
            />

            <CheckboxItem
              label={
                <p className="text-xs">
                  Get updates on{" "}
                  <span className="font-bold text-white underline">
                    WhatsApp.
                  </span>
                </p>
              }
              isChecked={formData.getUpdates}
                 onToggle={() => toggleCheckbox("getUpdates")}
            />
          </div>

         {/* Error message */}
          {error && (
            <p className="text-[#ff919d] text-[15px] leading-5 font-normal mb-[18px]">{error}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className={`
              w-full py-3.5 text-xs font-bold rounded-full shadow-lg transition duration-200
              ${isFormValid
                ? 'bg-[#ffffff] text-[#ca1f34] cursor-pointer'
                : ' bg-[#c6c5c9] text-[#ca1f34]'
              }
            `}
          >
            GET OTP
          </button>
        </form>
      </div>)}
    </div>
  );
}

export default EmployeeForm
