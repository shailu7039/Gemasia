import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Optional CSS for annotations

const PdfModal = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 max-w-4xl max-h-full overflow-auto">
        <button onClick={onClose} className="mb-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
        <div className="pdf-container">
          <Document file={pdfUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
