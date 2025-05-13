import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const EnquiryPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-form py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-3xl overflow-hidden shadow-xl rounded-2xl border-0 animate-fade-in bg-white/95 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-udm-primary to-udm-dark text-white p-8 lg:p-12">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6 animate-float">Welcome</h2>
                  <p className="text-udm-extralight mb-4">
                    We're excited to hear from you and learn more about your brand.
                  </p>
                  <p className="text-udm-light mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486zM10 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Location</h4>
                      <p className="text-sm text-udm-extralight">123 Business Ave, Suite 100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Contact Us</h4>
                      <p className="text-sm text-udm-extralight">info@udm.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 p-8 lg:p-12">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Fuel Your Brand's Goals</h1>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">with</span>
                  <span className="text-3xl font-bold text-udm-primary">UDM</span>
                </div>
                <p className="text-gray-600 mt-3">You will get a response within 24 hours. We will reach you soon.</p>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnquiryPage;
