import React from "react";
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  email: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ email }) => {
  return (
    <div className="text-center py-10 space-y-6 animate-fade-in">
      <div className="flex justify-center">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center animate-pulse-light">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        Your enquiry has been successfully submitted. We will reach out to you at{" "}
        <span className="font-semibold">{email}</span> within 24 hours.
      </p>
      
      <div className="bg-gradient-purple p-4 rounded-lg max-w-md mx-auto mt-6">
        <p className="text-sm text-gray-700">
          In the meantime, feel free to explore our services or follow us on social media for the latest updates.
        </p>
      </div>
      
      <div className="pt-6">
        <a 
          href="/"
          className="inline-flex items-center text-udm-primary hover:text-udm-secondary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default SuccessMessage;
