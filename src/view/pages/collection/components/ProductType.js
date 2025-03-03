import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
import { Input,Textarea } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    // Button,
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
  import axios from 'axios'
export const ProductType = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // State to manage form submission status
    const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}send-email`,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: formData.subject,
          }
        );
        if (response.status === 200) {
          setStatus("Message sent successfully!");
          setIsSubmitted(true); // Mark the form as submitted
  
          // Reset form data after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setStatus(`Failed to send message. Status code: ${response.status}`);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setStatus(`Failed to send message. Error: ${error.message}`);
      }
    };
  
    return (
        <div className='py-16 lg:px-40 md:px-20 px-5 '>
            <div className='lg:flex justify-center items-center gap-10'>
               <div className='m-auto'> <img className='' src={require("../../../assets/images/4ee8a004-05ab-450e-9ab2-b1e3d9c6f156-0_optimized_100.png")} alt='' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" /></div>
               <div
                           className="lg:w-1/2 md:w-1/2"
                           data-aos="fade-right"
                           data-aos-duration="2000"
                           data-aos-delay="200"
                         >
                           <h2 className="tracking-widest lg:text-3xl md:text-3xl text-2xl">
                             Tell Us What You Need
                           </h2>
                           <form onSubmit={handleSubmit}>
                             <div className="pt-5">
                               <label className="text-666666">Your Name</label>
                               <Input
                                 className="mt-1 custinputborder"
                                 placeholder="Please Enter First Name"
                                 name="name"
                                 value={formData.name}
                                 onChange={handleChange}
                                 disabled={isSubmitted} // Disable input after form submission
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
                                 disabled={isSubmitted} // Disable input after form submission
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
                                 disabled={isSubmitted} // Disable input after form submission
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
                                 disabled={isSubmitted} // Disable input after form submission
                               />
                             </div>
                             <div className="pt-5">
                               <button
                                 type="submit"
                                 className="px-6 py-2 rounded-md bg-primary text-white"
                                 disabled={isSubmitted} // Disable button after form submission
                               >
                                 Send
                               </button>
                             </div>
                           </form>
                           {status && <p className="pt-5 text-green-500">{status}</p>}
                         </div>
            </div>

            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        className="top-130px"
        
      >
        <ModalOverlay />
        <ModalContent className="top-130px bg-primary">
          <ModalHeader className='text-white'>SEND AN ENQUIRY</ModalHeader>
          <ModalCloseButton className='text-white' />
          <ModalBody pb={6} >
            <FormControl>
              <FormLabel className='text-white'>First name</FormLabel>
              <Input className='text-white' ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className='text-white'>Last name</FormLabel>
              <Input className='text-white' placeholder='Last name' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel className='text-white'>Email</FormLabel>
              <Input className='text-white ' placeholder='Email' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel className='text-white'>Subject</FormLabel>
              <Input className='text-white' placeholder='Subject' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <button className='border-white px-5 py-1 text-white' mr={3}>
              SEND
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        </div>
    )
}
