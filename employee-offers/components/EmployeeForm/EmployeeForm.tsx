"use client"
import  { useState } from 'react';
import { LayoutGrid, User, Mail, Building, MapPin, Smartphone, } from 'lucide-react';
import FormField from '../FormField/FormField';
import CheckboxItem from '../CheckBoxItem/CheckBoxItem';
import { ADVANTAGE_EMPLOYEE_OFFERS_COMPANY_OPTIONS, ADVANTAGE_EMPLOYEE_OFFERS_TYPE_OF_PRODUCTS } from '@/constant/constant';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    productType: '',
    fullName: '',
    emailId: '',
    companyName: '',
    pincode: '',
    mobileNumber: '',
    agreeTerms: false,
    getUpdates: false,
    nameInput: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const isFormValid = formData.agreeTerms && formData.fullName.length > 0; 

  return (
    <div className="flex  justify-end">
      <div className="lg:w-[431px] text-white rounded-2xl p-6 lg:p-[35px]"
        style={{
          background: 'radial-gradient(92.49% 103.55% at 89.79% 89.84%, rgba(79, 79, 79, 0.9) 0%, rgba(17, 17, 17, 0.9) 100%)',
           
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
            value={formData.productType}
            onChange={(e) => handleInputChange({ target: { name: 'productType', value: e.target.value } })}
            options={ADVANTAGE_EMPLOYEE_OFFERS_TYPE_OF_PRODUCTS}
          />

          <FormField
            icon={User}
            placeholder="Enter Full Name"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange({ target: { name: 'fullName', value: e.target.value } })}
          />

          <FormField
            icon={Mail}
            placeholder="Enter Email ID"
            type="email"
            value={formData.emailId}
            onChange={(e) => handleInputChange({ target: { name: 'emailId', value: e.target.value } })}
          />

          <FormField
            icon={Building}
            placeholder="Company Name"
            isSelect={true}
            value={formData.companyName}
            onChange={(e) => handleInputChange({ target: { name: 'companyName', value: e.target.value } })}
            options={ADVANTAGE_EMPLOYEE_OFFERS_COMPANY_OPTIONS}
          />

          <FormField
            icon={MapPin}
            placeholder="Enter Your Pincode"
            type="text"
            value={formData.pincode}
            onChange={(e) => handleInputChange({ target: { name: 'pincode', value: e.target.value } })}
          />
          <FormField
            icon={Smartphone}
            placeholder="Enter Mobile Number"
            type="tel"
            prefix="+91"
            value={formData.mobileNumber}
            onChange={(e) => handleInputChange({ target: { name: 'mobileNumber', value: e.target.value } })}
          />
</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-2 mb-2.5">
            <CheckboxItem
              label={
                <p className='text-xs'>
                  I agree to the <a href="#" className="font-bold text-white underline">Terms and Conditions.</a>
                </p>
              }
              isChecked={formData.agreeTerms}
              onToggle={() => setFormData(prev => ({ ...prev, agreeTerms: !prev.agreeTerms }))}
            />
            <CheckboxItem
              label={
                <p className='text-xs'>
                  Get updates on <span className="font-bold text-white underline">WhatsApp.</span>
                </p>
              }
              isChecked={formData.getUpdates}
              onToggle={() => setFormData(prev => ({ ...prev, getUpdates: !prev.getUpdates }))}
            />
          </div>

          {/* <p className="text-[#ff919d] text-sm mb-6">
            Please Enter Your Name.
          </p> */}
        
          <button
            type="submit"
            disabled={!isFormValid}
            className={`
              w-full py-3.5 text-xs font-bold rounded-full shadow-lg transition duration-200
              ${isFormValid
                ? 'bg-[#c6c5c9]  text-[#ca1f34]'
                : 'bg-[#c6c5c9] text-[#ca1f34]'
              }
            `}
          >
            GET OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm
 