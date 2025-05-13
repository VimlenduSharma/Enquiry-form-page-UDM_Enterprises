import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";
import SuccessMessage from "@/components/SuccessMessage";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(5, { message: "Please enter a valid phone number" }),
  designation: z.string().optional(),
  brandName: z.string().min(1, { message: "Brand name is required" }),
  website: z.string().optional(),
  location: z.string().optional(),
  category: z.string().min(1, { message: "Category is required" }),
  instagram: z.string().optional(),
  query: z.string().min(3, { message: "Please provide details about your query" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    designation: "",
    brandName: "",
    website: "",
    location: "",
    category: "",
    instagram: "",
    query: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof FormValues, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormValues;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please fix the form errors before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your enquiry has been submitted successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return <SuccessMessage email={formData.email} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="relative">
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
          value={formData.name}
          onChange={handleChange}
          className={`form-input-effect ${errors.name ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="name" className="form-label-effect">
          Name<span className="text-red-500">*</span>
        </label>
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
          className={`form-input-effect ${errors.email ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="email" className="form-label-effect">
          Email address<span className="text-red-500">*</span>
        </label>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder=" "
          value={formData.phone}
          onChange={handleChange}
          className={`form-input-effect ${errors.phone ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="phone" className="form-label-effect">
          Phone number<span className="text-red-500">*</span>
        </label>
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div className="relative">
        <input
          type="text"
          name="designation"
          id="designation"
          placeholder=" "
          value={formData.designation}
          onChange={handleChange}
          className="form-input-effect"
        />
        <label htmlFor="designation" className="form-label-effect">
          Designation
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="brandName"
          id="brandName"
          placeholder=" "
          value={formData.brandName}
          onChange={handleChange}
          className={`form-input-effect ${errors.brandName ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="brandName" className="form-label-effect">
          Brand Name<span className="text-red-500">*</span>
        </label>
        {errors.brandName && <p className="text-red-500 text-xs mt-1">{errors.brandName}</p>}
      </div>

      <div className="relative">
        <input
          type="text"
          name="website"
          id="website"
          placeholder=" "
          value={formData.website}
          onChange={handleChange}
          className="form-input-effect"
        />
        <label htmlFor="website" className="form-label-effect">
          Brand website/ ecommerce store
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="location"
          id="location"
          placeholder=" "
          value={formData.location}
          onChange={handleChange}
          className="form-input-effect"
        />
        <label htmlFor="location" className="form-label-effect">
          Location (Country/City)
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          name="category"
          id="category"
          placeholder=" "
          value={formData.category}
          onChange={handleChange}
          className={`form-input-effect ${errors.category ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="category" className="form-label-effect">
          Category<span className="text-red-500">*</span>
        </label>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
      </div>

      <div className="relative">
        <input
          type="text"
          name="instagram"
          id="instagram"
          placeholder=" "
          value={formData.instagram}
          onChange={handleChange}
          className="form-input-effect"
        />
        <label htmlFor="instagram" className="form-label-effect">
          Instagram Handle<span className="text-red-500">*</span>
        </label>
        {errors.instagram && <p className="text-red-500 text-xs mt-1">{errors.instagram}</p>}
      </div>

      <div className="relative">
        <input
          type="text"
          name="query"
          id="query"
          placeholder=" "
          value={formData.query}
          onChange={handleChange}
          className={`form-input-effect ${errors.query ? 'border-red-500' : ''}`}
          required
        />
        <label htmlFor="query" className="form-label-effect">
          Query /regarding<span className="text-red-500">*</span>
        </label>
        {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
      </div>

      <div className="mt-8">
        <button 
          type="submit" 
          className="submit-button w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
