
import React, { FormEvent, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service configuration
    // You'll need to replace these IDs with your actual EmailJS account details
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        from_phone: formState.phone,
        message: formState.message
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to send the message:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-affinity p-6 border border-gray-100 hover:shadow-affinity-hover transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-5 text-apt-darkgray">Send Us a Message</h3>
      
      {isSubmitted ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4 animate-bounce-slow">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
          <p className="opacity-80">Thank you for contacting us. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-apt-darkgray mb-1">
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formState.name} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-purple focus:ring focus:ring-apt-purple/20 transition-all outline-none" 
              placeholder="John Doe" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-apt-darkgray mb-1">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formState.email} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-purple focus:ring focus:ring-apt-purple/20 transition-all outline-none" 
                placeholder="john@example.com" 
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-apt-darkgray mb-1">
                Phone Number
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formState.phone} 
                onChange={handleChange} 
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-purple focus:ring focus:ring-apt-purple/20 transition-all outline-none" 
                placeholder="+91 9274320379" 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-apt-darkgray mb-1">
              Your Message
            </label>
            <textarea 
              id="message" 
              name="message" 
              value={formState.message} 
              onChange={handleChange} 
              required 
              rows={4} 
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-apt-purple focus:ring focus:ring-apt-purple/20 transition-all outline-none resize-none" 
              placeholder="How can we help you?" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="bg-affinity-gradient text-white px-6 py-3 rounded-md font-medium w-full flex items-center justify-center group shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
