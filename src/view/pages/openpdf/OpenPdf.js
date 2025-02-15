import React, { useState } from 'react';
import PdfModal from './components/PdfModal'; // Import the PdfModal component

const OpenPdf = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className="text-center font-light text-blue-500 cursor-pointer" onClick={handleClick}>
        Click here to view the PDF
      </p>
      <PdfModal isOpen={isModalOpen} onClose={handleClose} pdfUrl="https://maxmarkinc.com/wp-content/uploads/2023/01/Website-Semi-Mount-Program-Page.pdf" />
    </div>
  );
};

export default OpenPdf;
