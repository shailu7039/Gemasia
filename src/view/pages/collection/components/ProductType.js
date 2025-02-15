import React from 'react'
import { Link } from 'react-router-dom'
import { Select } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
export const ProductType = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
    return (
        <div className='py-16'>
            <div className='flex justify-center items-center gap-10'>
                <img className='h-650px' src={require("../../../assets/images/cdiamond.jpg")} alt='' data-aos="fade-right" data-aos-duration="2000" data-aos-delay="200" />
                <div className="lg:w-1/2 md:w-1/2 lg:pt-0 md:pt-0 pt-5" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="200">
                    <h5 className="lg:text-2xl font-semibold pb-5">Certified Diamonds
                    </h5>
                    {/* <h2 className="lg:text-4xl md:text-2xl text-2xl py-2 font-semibold">Earring</h2> */}
                    {/* <h4 className="lg:text-2xl md:text-xl font-semibold">Unparalleled Quality, Unrestricted Creativity</h4> */}
                    <div>
                        <label className='text-sm'>Shape</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Clarity</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Color</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Cut</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Fluorescence</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Grading Report</label>
                        <Select className='mt-1 mb-2' placeholder='Select option'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </div>
                    <div>
                        <label className='text-sm'>Size</label>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className="pt-5" onClick={onOpen}>
                        <Link to="/product-type"><button className="bg-primary px-8 py-2 rounded-md text-white">SEND AN ENQUIRY</button></Link>
                    </div>
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
