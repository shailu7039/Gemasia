import React, { useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Building2, MailIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios"; // If using axios

export const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State to manage form submission status
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/send-email`, formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
      } else {
        setStatus(`Failed to send message. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus(`Failed to send message. Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="lg:px-40 md:px-20 px-5 pb-20 container m-auto">
        <div className="lg:flex md:flex gap-10">
          <div className="lg:w-1/2 md:w-1/2" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200">
            <h2 className="tracking-widest lg:text-3xl md:text-3xl text-2xl">Tell Us Your Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="pt-5">
                <label className="text-666666">Your Name</label>
                <Input
                  className="mt-1 custinputborder"
                  placeholder="Please Enter First Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="pt-5">
                <label className="text-666666">Your Email</label>
                <Input
                  className="mt-1 custinputborder"
                  placeholder="Please Enter Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="pt-5">
                <label className="text-666666">Subject</label>
                <Input
                  className="mt-1 custinputborder"
                  placeholder="Please Enter Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="pt-5">
                <label className="text-666666">Your Message</label>
                <Textarea
                  className="mt-1 custinputborder"
                  placeholder="Please Enter Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="pt-5">
              <button type="submit" className="px-6 py-2 rounded-md bg-primary text-white">Send</button>
              </div>
            </form>
            {status && <p className="pt-5 text-green-500">{status}</p>}
          </div>
          <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-10" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
            <div>
              <h2 className="tracking-widest lg:text-3xl md:text-3xl text-2xl">Contact Us</h2>
            </div>
            <div className="pt-5">
              <div className="flex items-center gap-2">
                <Building2 className="lg:w-5 md:w-0 w-5 lg:h-5 md:h-0 h-5" />
                <p className="lg:text-xl md:text-xl text-lg">Address</p>
              </div>
              <p className="pt-2 text-666666">Antwerp, Belgium</p>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <Phone className="lg:w-5 md:w-0 w-5 lg:h-5 md:h-0 h-5" />
              <p className="lg:text-xl md:text-xl text-lg">Phone</p>
            </div>
            <div className="pt-2">
              <p className="text-666666"><a href="tel:+32 32327580">Tel:+32 32327580</a></p>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <MailIcon className="lg:w-5 md:w-0 w-5 lg:h-5 md:h-0 h-5" />
              <p className="lg:text-xl md:text-xl text-lg">Email</p>
            </div>
            <div className="pt-2">
              <p className="text-666666"><a href="mailto:avnit@gemasiagroup.com">avnit@gemasiagroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
