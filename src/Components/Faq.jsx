
// import { useState } from "react";
// import { FaArrowDown } from "react-icons/fa";

// import { FaArrowUp } from "react-icons/fa";


// const Faq = () => {
//     const FAQs =[
//         {
//             question:"What can I automate with Aurius?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"Do I need technical skills to use it?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"Is my data secure?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"Can I change my plan later?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"Which tools does Aurius connect with?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"How quickly can my team get started?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },
//         {
//             question:"What kind of support does Aurius provide?",
//             ans:"a concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension"
//         },

//     ]

//     const [isOpen ,setIsOpen] = useState(null)
//    const HandleQuestion =(index)=>{
//     setIsOpen(index);
//     setIsOpen(isOpen === index ? null :index)
//    } 
//   return (
//     <div className="flex justify-between  border border-[#CCCCCC] mb-20">
//         <div className=" space-y-2 pt-15 px-5">
//             <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>FAQ</p>
//             <h1 className=" text-[40px] font-normal">Frequently asked questions</h1>
//             <p className="text-[14px] text-[#3D3D3D] max-w-sm">Everything you need to know about getting started with Aurius.</p>
//         </div>
//         <div className="border-l border-l-[#CCCCCC]">
//             {FAQs.map((data,index)=>{
//                 return <div onClick={()=>HandleQuestion(index)} key={index} className="flex flex-col gap-y-2 p-5 border-b border-b-[#CCCCCC] last:border-b-0 cursor-pointer">
//                     <h1  className="flex justify-between items-center text-[18px] text-[#181818]">{data.question}
//                     {isOpen === index ? (<FaArrowUp />):(<FaArrowDown />)} </h1>
//                    {isOpen === index && <p className="text-[14px] text-[#3D3D3D] transition duration-200 ease-out ">{data.ans}</p>} 
//                 </div>
//             })}
//         </div>
//     </div>
//   )
// }

// export default Faq


import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Faq = () => {
    const FAQs = [
        {
            question: "What can I automate with Aurius?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "Do I need technical skills to use it?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "Is my data secure?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "Can I change my plan later?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "Which tools does Aurius connect with?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "How quickly can my team get started?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
        {
            question: "What kind of support does Aurius provide?",
            ans: "A concise, impactful sentence often used for summarizing, focusing on key information for improved comprehension."
        },
    ];

    const [isOpen, setIsOpen] = useState(null);

    const HandleQuestion = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="flex flex-col lg:flex-row border border-[#CCCCCC] mb-20 overflow-hidden">
            {/* Header Content */}
            <div className="lg:w-1/2 space-y-4 pt-10 lg:pt-15 pb-10 px-6 lg:px-10 bg-white">
                <div className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'>
                    <span className='size-3 bg-[#FF5101]'></span>
                    FAQ
                </div>
                <h1 className="text-3xl lg:text-[40px] leading-tight font-normal">
                    Frequently asked questions
                </h1>
                <p className="text-[14px] text-[#3D3D3D] max-w-sm">
                    Everything you need to know about getting started with Aurius.
                </p>
            </div>

            {/* FAQ List */}
            <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-[#CCCCCC]">
                {FAQs.map((data, index) => {
                    const active = isOpen === index;
                    return (
                        <div 
                            onClick={() => HandleQuestion(index)} 
                            key={index} 
                            className="group flex flex-col p-5 border-b border-[#CCCCCC] last:border-b-0 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex justify-between items-center gap-x-4">
                                <h1 className={`text-[16px] md:text-[18px] transition-colors ${active ? 'text-[#FF5101]' : 'text-[#181818]'}`}>
                                    {data.question}
                                </h1>
                                <div className={`transition-transform duration-300 ${active ? 'rotate-180 text-[#FF5101]' : 'text-[#3D3D3D]'}`}>
                                    <FaArrowDown />
                                </div>
                            </div>
                            
                            {/* Smooth opening content */}
                            <div className={`grid transition-all duration-300 ease-in-out ${active ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="text-[14px] text-[#3D3D3D] leading-relaxed">
                                        {data.ans}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Faq;