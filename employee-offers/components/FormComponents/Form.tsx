"use client"
import React, { useState } from 'react';
import { LayoutGrid, User, Mail, Building, MapPin, Smartphone, ChevronDown, Check } from 'lucide-react';
import FormField from './FormField';
import CheckboxItem from './CheckBoxItem';








const Form = () => {
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
    // In a real application, you would handle the API call here
    console.log("Form Submitted:", formData);
    // Add logic to display a success/error message instead of console.log
  };

  const productOptions = [
    { label: "Software License", value: "software" },
    { label: "Hardware Upgrade", value: "hardware" },
    { label: "Service Contract", value: "service" },
  ];

  const companyOptions = [
    { label: "Google", value: "google" },
    { label: "Microsoft", value: "microsoft" },
    { label: "Apple", value: "apple" },
  ];

  const isFormValid = formData.agreeTerms && formData.fullName.length > 0; // Simple validation example

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="w-full text-white rounded-3xl p-6 sm:p-8 shadow-2xl"
        style={{
          background: 'radial-gradient(92.49% 103.55% at 89.79% 89.84%, rgba(79, 79, 79, 0.9) 0%, rgba(17, 17, 17, 0.9) 100%)',
          width: '431px', // Note: Fixed height might cause content overflow on smaller screens.
        }}
      >

        {/* Header */}
        <h1 className="text-[28px] pr-10 font-extrabold text-white mb-2.5 leading-tight">
          Dear Employee, Get Started To Unlock The Best Offers!
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <FormField
            icon={LayoutGrid}
            placeholder="Type Of Product"
            isSelect={true}
            value={formData.productType}
            onChange={(e) => handleInputChange({ target: { name: 'productType', value: e.target.value } })}
            options={productOptions}
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
            options={companyOptions}
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

          {/* Checkboxes/Agreements */}
          <div className="mt-2 mb-2.5">
            <CheckboxItem
              label={
                <>
                  I agree to the <a href="#" className="font-bold text-white underline">Terms and Conditions.</a>
                </>
              }
              isChecked={formData.agreeTerms}
              onToggle={() => setFormData(prev => ({ ...prev, agreeTerms: !prev.agreeTerms }))}
            />
            <CheckboxItem
              label={
                <>
                  Get updates on <span className="font-bold text-white underline">WhatsApp.</span>
                </>
              }
              isChecked={formData.getUpdates}
              onToggle={() => setFormData(prev => ({ ...prev, getUpdates: !prev.getUpdates }))}
            />
          </div>

          {/* Validation/Instruction Text */}
          <p className="text-[#ff919d] text-sm mb-6">
            Please Enter Your Name.
          </p>

          {/* GET OTP Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`
              w-full py-3.5 text-lg font-bold rounded-full shadow-lg transition duration-200
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

export default Form
 