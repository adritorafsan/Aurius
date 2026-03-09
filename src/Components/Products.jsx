// import product1 from '../assets/product1.png'
// import product2 from '../assets/product2.png'
// import product3 from '../assets/product3.png'
// import product4 from '../assets/product4.png'

// const Products = () => {
//     return (
//         <div className="border border-[#CCCCCC] flex flex-col gap-y-3 mb-15">
//             <div className="flex flex-col justify-center items-center text-center gap-y-4.5 mt-15 mb-20">
//                 <p className='flex justify-center items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRODUCT</p>
//                 <h1 className="text-[40px] max-w-lg">Powerful products, built for modern teams</h1>
//                 <p className="text-[14px] text-[#3D3D3D]">Everything you need to keep work flowing without friction.</p>
//             </div>
//             <div className="px-5 flex gap-x-20">
//                 <div className='w-45'>
//                     <p className="text-[#919191] text-[12px] py-1 border-b border-b-[#C7C7C7] mb-5">Automated Emails</p>
//                     <p className="text-[#919191] text-[12px] py-1 border-b border-b-[#C7C7C7] mb-5">Scheduling</p>
//                     <p className="text-[#919191] text-[12px] py-1 border-b border-b-[#C7C7C7] mb-5">Task Automation</p>
//                     <p className="text-[#919191] text-[12px] py-1 border-b border-b-[#C7C7C7] mb-5">Smart Summaries</p>
//                 </div>
//                 <div className="bg-white space-y-12 py-8 pl-5">
//                     <div className='flex gap-x-15 items-end'>
//                         <div className=' space-y-4'>
//                             <p className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRODUCT - 1</p>
//                             <h1 className='text-[40px] font-normal'>Automated Emails</h1>
//                             <p className='max-w-sm text-[14px] text-[#3D3D3D]'>Let Aurius manage your inbox. From smart replies to timely follow-ups, emails move forward automatically without bottlenecks.</p>
//                         </div>
//                         <img src={product1} alt="" />
//                     </div>
//                     <div className='flex gap-x-15  items-end'>
//                         <div className=' space-y-4'>
//                             <p className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRODUCT - 2</p>
//                             <h1 className='text-[40px] font-normal'>Effortless Scheduling</h1>
//                             <p className='max-w-sm text-[14px] text-[#3D3D3D]'>Skip calendar chaos. Aurius finds the right time, sends invites, and adapts to last-minute changes so meetings stay on track.</p>
//                         </div>
//                         <img src={product2} alt="" />
//                     </div>
//                     <div className='flex gap-x-15 items-end'>
//                         <div className=' space-y-4'>
//                             <p className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRODUCT - 3</p>
//                             <h1 className='text-[40px] font-normal'>Task Automation</h1>
//                             <p className='max-w-sm text-[14px] text-[#3D3D3D]'>Simplify repetitive work. Aurius handles reminders, progress updates, and data handoffs between tools so your team can focus.</p>
//                         </div>
//                         <img src={product3} alt="" />
//                     </div>
//                     <div className='flex gap-x-15 items-end'>
//                         <div className=' space-y-4'>
//                             <p className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRODUCT - 4</p>
//                             <h1 className='text-[40px] font-normal'>Smart Summaries</h1>
//                             <p className='max-w-sm text-[14px] text-[#3D3D3D]'>Transform hours of content into minutes of clarity. Aurius turns documents, meetings, and logs into clean, actionable briefs.</p>
//                         </div>
//                         <img src={product4} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Products


import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'

const Products = () => {

    const products = [
        {
            id: "PRODUCT - 1",
            title: "Automated Emails",
            desc: "Let Aurius manage your inbox. From smart replies to timely follow-ups, emails move forward automatically without bottlenecks.",
            img: product1
        },
        {
            id: "PRODUCT - 2",
            title: "Effortless Scheduling",
            desc: "Skip calendar chaos. Aurius finds the right time, sends invites, and adapts to last-minute changes so meetings stay on track.",
            img: product2
        },
        {
            id: "PRODUCT - 3",
            title: "Task Automation",
            desc: "Simplify repetitive work. Aurius handles reminders, progress updates, and data handoffs between tools so your team can focus.",
            img: product3
        },
        {
            id: "PRODUCT - 4",
            title: "Smart Summaries",
            desc: "Transform hours of content into minutes of clarity. Aurius turns documents, meetings, and logs into clean, actionable briefs.",
            img: product4
        }
    ]

    return (
        <div className="border border-[#CCCCCC] mb-16">

            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 py-16 px-6">

                <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
                    <span className='size-3 bg-[#FF5101]'></span>
                    PRODUCT
                </p>

                <h1 className="text-2xl md:text-3xl lg:text-[40px] max-w-lg font-medium">
                    Powerful products, built for modern teams
                </h1>

                <p className="text-sm text-[#3D3D3D]">
                    Everything you need to keep work flowing without friction.
                </p>

            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row px-6 lg:px-10 gap-10">

                {/* Sidebar */}
                <div className='hidden lg:block w-44 flex-shrink-0'>

                    <p className="text-[#919191] text-xs py-2 border-b mb-4">
                        Automated Emails
                    </p>

                    <p className="text-[#919191] text-xs py-2 border-b mb-4">
                        Scheduling
                    </p>

                    <p className="text-[#919191] text-xs py-2 border-b mb-4">
                        Task Automation
                    </p>

                    <p className="text-[#919191] text-xs py-2 border-b mb-4">
                        Smart Summaries
                    </p>

                </div>

                {/* Product List */}
                <div className="flex flex-col gap-16 w-full">

                    {products.map((item, index) => (

                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center md:items-end gap-8"
                        >

                            {/* Text */}
                            <div className="space-y-4 md:max-w-sm">

                                <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
                                    <span className='size-3 bg-[#FF5101]'></span>
                                    {item.id}
                                </p>

                                <h2 className='text-2xl md:text-3xl lg:text-[40px] font-normal'>
                                    {item.title}
                                </h2>

                                <p className='text-sm text-[#3D3D3D]'>
                                    {item.desc}
                                </p>

                            </div>

                            {/* Image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full max-w-[420px]"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Products