
import React,{useState} from 'react'
import { ArrowDownToLine,Eye,ArrowDown } from 'lucide-react'
import pdf from "../../../pdf/Addendum Supply Chain policy 10.11.21.pdf"
import pdf1 from "../../../pdf/Annual Management Report 2021.pdf"
import pdf2 from "../../../pdf/Annual Management Report 2023.pdf"
import pdf3 from "../../../pdf/Annual Management Review 2022.pdf"
import pdf4 from "../../../pdf/GEMASIA - Ethical Sourcing Policy.pdf"
import pdf5 from "../../../pdf/IDPR Policy.pdf"
import pdf6 from "../../../pdf/Provenance Claim Policy Statement.pdf"
import pdf7 from "../../../pdf/Supply Chain policy (2).pdf"
import pdf8 from "../../../pdf/Supply Chain Reporting 2021.pdf"
import pdf9 from "../../../pdf/Supply Chain Reporting 2022.pdf"
import pdf10 from "../../../pdf/Supply Chain Reporting 2023.pdf"
export const PolicyDocument = () => {
    const [disclosure ,setdisclosure]=useState(false)
  const handleToggle=()=>{
    setdisclosure(!disclosure)
  }
  const disclosures=[
    {
      title:"Addendum Supply Chain policy 10.11.21",
      pdf:pdf
    },
    {
      title:"Annual Management Report 2021",
      pdf:pdf1
    },
    {
      title:"Annual Management Report 2023",
      pdf:pdf2
    },
    {
      title:"Annual Management Review 2022",
      pdf:pdf3
    },
    {
      title:"GEMASIA - Ethical Sourcing Policy",
      pdf:pdf4
    },
    {
      title:"IDPR Policy",
      pdf:pdf5
    },
    {
      title:"Provenance Claim Policy Statement",
      pdf:pdf6
    },
    {
      title:"Supply Chain policy (2)",
      pdf:pdf7
    },
    {
      title:"Supply Chain Reporting 2021",
      pdf:pdf8
    },
    {
      title:"Supply Chain Reporting 2022",
      pdf:pdf9
    },
    {
      title:"Supply Chain Reporting 2023",
      pdf:pdf10
    },
    // {
    //   title:"Financial results, on conclusion of the meeting of the board of directors where the financial results were approved"
    // },
    // {
    //   title:"Complete copy of the annual report including balance sheet, profit and loss account, directors report, corporate governance report etc"
    // },
  ]
  return (
    <div className='lg:px-10 md:px-0 px-5 lg:py-20 md:py-20 py-10 max-w-6xl m-auto' id='DisclosureId'>
        {/* <h2 className='lg:text-3xl md:text-3xl text-2xl uppercase text-center  letterspacing2px'>DISCLOSURES UNDER <br/><span className='font-semibold'>REGULATION 46 OF THE LODR</span></h2> */}
        <div className='lg:pt-2 md:pt-20 pt-10'>
          {
            disclosures.map((item)=>{
              return(
                <div className='flex gap-5 justify-between borbottom pb-3 pr-3 mb-3'>
              <p className='text-sm text-7a7a7a'>{item.title}</p>
             <div className='flex items-center'>
              <a href={item.pdf} target='_blank'><Eye className='w-4 h-4 ml-2'/></a>
             </div>
          </div>
              )
            })
          }
        </div>
        {/* <div className="flex justify-center pt-10">
            <button onClick={handleToggle} className="custbutton py-3 px-5">
              <div className="flex items-center gap-2 letterspacing3px">
                <ArrowDown className='w-4 h-4'/>
               {disclosure?"Hide":"Expand"} 
              </div>
            </button>
          </div> */}
    </div>
  )
}
