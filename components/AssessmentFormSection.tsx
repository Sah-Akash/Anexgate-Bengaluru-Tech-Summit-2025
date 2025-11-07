import React, { useState } from 'react';

interface AssessmentFormSectionProps {
  onFormSubmit: () => void;
}

interface ValidationErrors {
  name?: string;
  company?: string;
  email?: string;
  interest?: string;
}

const AssessmentFormSection: React.FC<AssessmentFormSectionProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    interest: '',
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): ValidationErrors => {
    const errors: ValidationErrors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Full name must be at least 3 characters.';
    }
    if (!formData.company.trim()) {
      errors.company = 'Company name is required.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.interest) {
      errors.interest = 'Please select your primary interest.';
    }
    return errors;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted successfully:', formData);
      onFormSubmit();
      setIsSubmitting(false);
      setFormData({ name: '', company: '', email: '', interest: '' });
      setValidationErrors({});
    }, 1000);
  };

  const InfoListItem: React.FC<{ children: React.ReactNode; delay: string }> = ({ children, delay }) => (
    <li className="flex items-start slide-up" style={{ animationDelay: delay }}>
      <svg className="w-5 h-5 text-[#0047AB] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>{children}</span>
    </li>
  );

  return (
    <section id="assessment" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 slide-up" style={{ animationDelay: '0.1s' }}>Get Your Free Network Assessment</h2>
            <p className="text-gray-400 md:text-lg slide-up" style={{ animationDelay: '0.2s' }}>
              Schedule a complimentary security assessment with our experts to uncover vulnerabilities and strengthen your network.
            </p>
            <div className="mt-8 text-left space-y-4">
              <h3 className="text-xl font-semibold text-white slide-up" style={{ animationDelay: '0.3s' }}>What's Included:</h3>
              <ul className="space-y-3 text-gray-400">
                <InfoListItem delay="0.4s">A comprehensive analysis of your current network architecture.</InfoListItem>
                <InfoListItem delay="0.5s">Identification of potential vulnerabilities and misconfigurations.</InfoListItem>
                <InfoListItem delay="0.6s">A personalized, actionable report with expert recommendations.</InfoListItem>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#181818] p-8 rounded-xl border border-gray-800 space-y-6 slide-up" style={{ animationDelay: '0.4s' }} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`w-full bg-[#2a2a2a] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${validationErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#0047AB]'}`} placeholder="Jane Doe" required />
                {validationErrors.name && <p className="text-red-500 text-xs mt-1">{validationErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={`w-full bg-[#2a2a2a] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${validationErrors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#0047AB]'}`} placeholder="Innovate Corp" required />
                {validationErrors.company && <p className="text-red-500 text-xs mt-1">{validationErrors.company}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`w-full bg-[#2a2a2a] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${validationErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#0047AB]'}`} placeholder="jane.doe@company.com" required />
                {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">Primary Interest</label>
                <select name="interest" id="interest" value={formData.interest} onChange={handleChange} className={`w-full bg-[#2a2a2a] border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors ${validationErrors.interest ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-[#0047AB]'}`} required>
                  <option value="" disabled>Select an option</option>
                  <option value="Hybrid SASE">Hybrid SASE</option>
                  <option value="Firewall">Next-Gen Firewall</option>
                  <option value="SD-WAN">SD-WAN</option>
                  <option value="Partner">Become a Partner</option>
                </select>
                {validationErrors.interest && <p className="text-red-500 text-xs mt-1">{validationErrors.interest}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0047AB] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Get My Free Assessment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentFormSection;