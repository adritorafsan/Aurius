// import works1 from '../assets/works1.png'
// import works2 from '../assets/works2.png'
// import works3 from '../assets/works3.png'


// const HowWorks = () => {
//     return (
//         <div className='border border-[#CCCCCC] grid grid-cols-3 mb-15 border-b-0'>
//             <div className='border-b border-b-[#CCCCCC] px-5 py-10 flex flex-col gap-y-4 col-span-3'>
//                 <p className='flex  items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>HOW IT WORKS</p>
//                 <h1 className='text-[40px] max-w-lg '>Automation in three simple steps</h1>
//                 <p className='text-[14px] text-[#3D3D3D] max-w-sm '>Aurius makes complex workflows effortless — from start to finish.</p>
//             </div>
//             <div className='flex flex-col gap-0'>
//                 <img className=' border border-[#CCCCCC] border-l-0 border-y-0' src={works1} alt="" />
//                 <div className='pt-7.5 border border-l-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
//                     <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 1</p>
//                     <h1 className='text-[30px]'>Connect your tools</h1>
//                     <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Link Gmail, Slack, Calendar, Notion, and more in a few clicks.</p>
//                 </div>
//             </div>
//             <div className='flex flex-col'>
//                 <img className=' border border-[#CCCCCC]  border-l-0 border-y-0' src={works2} alt="" />
//                 <div className='pt-7.5 border border-x-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
//                     <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 2</p>
//                     <h1 className='text-[30px]'>Let AI understand the work</h1>
//                     <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Emails, tasks, and docs are scanned and summarized instantly.</p>
//                 </div>
//             </div>
//             <div className='flex flex-col '>
//                 <img  src={works3} alt="" />
//                 <div className='pt-7.5 border border-r-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
//                     <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 3</p>
//                     <h1 className='text-[30px]'>Get results, automatically</h1>
//                     <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Summaries, tasks, and scheduling handled in the background — no manual effort.</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default HowWorks

import works1 from '../assets/works1.png'
import works2 from '../assets/works2.png'
import works3 from '../assets/works3.png'

const HowWorks = () => {

    const steps = [
        {
            step: "STEP - 1",
            title: "Connect your tools",
            desc: "Link Gmail, Slack, Calendar, Notion, and more in a few clicks.",
            img: works1
        },
        {
            step: "STEP - 2",
            title: "Let AI understand the work",
            desc: "Emails, tasks, and docs are scanned and summarized instantly.",
            img: works2
        },
        {
            step: "STEP - 3",
            title: "Get results, automatically",
            desc: "Summaries, tasks, and scheduling handled in the background — no manual effort.",
            img: works3
        }
    ]

    return (
        <div className='border border-[#CCCCCC] mb-16'>

            {/* Header */}
            <div className='border-b border-[#CCCCCC] px-6 py-12 flex flex-col gap-4'>

                <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
                    <span className='size-3 bg-[#FF5101]'></span>
                    HOW IT WORKS
                </p>

                <h1 className='text-2xl md:text-3xl lg:text-[40px] max-w-lg font-medium'>
                    Automation in three simple steps
                </h1>

                <p className='text-sm text-[#3D3D3D] max-w-sm'>
                    Aurius makes complex workflows effortless — from start to finish.
                </p>

            </div>

            {/* Steps */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border-[#CCCCCC]'>

                {steps.map((item, index) => (

                    <div key={index} className='flex flex-col border-r border-r-[#CCCCCC] last:border-0'>

                        <img
                            src={item.img}
                            alt={item.title}
                            className='w-full border-b border-[#CCCCCC]'
                        />

                        <div className='px-6 py-8 space-y-4'>

                            <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
                                <span className='size-3 bg-[#FF5101]'></span>
                                {item.step}
                            </p>

                            <h2 className='text-xl md:text-2xl lg:text-[30px] font-medium'>
                                {item.title}
                            </h2>

                            <p className='text-sm text-[#3D3D3D] max-w-xs'>
                                {item.desc}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default HowWorks