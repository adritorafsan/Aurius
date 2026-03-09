// import benefit1 from '../assets/benefit1.svg'
// import benefit2 from '../assets/benefit2.svg'
// import benefit3 from '../assets/benefit3.svg'
// import benefit4 from '../assets/benefit4.svg'

// const Benefits = () => {
//     return (
//         <div className='border border-[#CCCCCC] grid grid-cols-2 grid-rows-4 mb-15'>
//             <div className='border-b border-b-[#CCCCCC] col-span-2 flex flex-col justify-center items-center gap-y-4'>
//                 <p className='flex justify-center items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>BENEFITS</p>
//                 <h1 className='text-[40px] text-[#181818]'>Smarter workflows, zero friction</h1>
//                 <p className='text-[#3D3D3D] text-[14px] max-w-md mx-auto text-center'>From automation to insights, everything works seamlessly in the background.</p>
//             </div>
//             <div className='border-b border-r border-[#CCCCCC] px-5 py-10 space-y-10'>
//                 <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit1} alt="" />
//                 <div className=' space-y-3.5'>
//                     <h1 className='text-[22px] text-[#181818] font-medium'>Autonomous Execution</h1>
//                     <p className='text-[#3D3D3D] text-[14px]'>Works with your tools: Slack, Gmail, Calendar, and more.</p>
//                 </div>
//             </div>
//             <div className=' px-5 py-10 space-y-10'>
//                 <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit2} alt="" />
//                 <div className=' space-y-3.5'>
//                     <h1 className='text-[22px] text-[#181818] font-medium'>Seamless Integration</h1>
//                     <p className='text-[#3D3D3D] text-[14px]'>Runs without manual input—AI handles workflows end-to-end.</p>
//                 </div>
//             </div>
//             <div className='border-b border-r border-[#CCCCCC] px-5 py-10 space-y-10'>
//                 <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit3} alt="" />
//                 <div className=' space-y-3.5'>
//                     <h1 className='text-[22px] text-[#181818] font-medium'>Real-Time Insights</h1>
//                     <p className='text-[#3D3D3D] text-[14px]'>Summaries and updates delivered instantly, no bottlenecks.</p>
//                 </div>
//             </div>
//             <div className='border-b border-t border-[#CCCCCC] px-5 py-10 space-y-10'>
//                 <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit4} alt="" />
//                 <div className=' space-y-3.5'>
//                     <h1 className='text-[22px] text-[#181818] font-medium'>Scalable Performance</h1>
//                     <p className='text-[#3D3D3D] text-[14px]'>From small teams to enterprises—built to grow with you.</p>
//                 </div>
//             </div>
//             <div className=' flex justify-center items-center flex-col gap-y-8 col-span-2 overflow-hidden'>
//                 <div className='flex  gap-x-5 w-max whitespace-nowrap'>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Enrich CRM data</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Summarize meetings</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Schedule calls</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Generate Blog Post</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Enrich CRM data</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>translate documents</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Draft client emails</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Summarize meetings</p>
//                 </div>
//                 <div className='flex  gap-x-5 w-max whitespace-nowrap'>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Research leads</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Track deadlines</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Manage tickets</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Research leads</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Assist shoppers</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Automate reminders</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
//                     <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Benefits


import benefit1 from '../assets/benefit1.svg'
import benefit2 from '../assets/benefit2.svg'
import benefit3 from '../assets/benefit3.svg'
import benefit4 from '../assets/benefit4.svg'

const Benefits = () => {
    return (
        <div className='border border-[#CCCCCC] mb-16'>

            <div className='grid grid-cols-1 md:grid-cols-2'>

                {/* Header */}
                <div className='col-span-1 md:col-span-2 border-b border-[#CCCCCC] flex flex-col items-center text-center gap-4 py-12 px-6'>

                    <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
                        <span className='size-3 bg-[#FF5101]'></span>
                        BENEFITS
                    </p>

                    <h1 className='text-2xl md:text-3xl lg:text-[40px] font-medium text-[#181818]'>
                        Smarter workflows, zero friction
                    </h1>

                    <p className='text-[#3D3D3D] text-sm max-w-md'>
                        From automation to insights, everything works seamlessly in the background.
                    </p>

                </div>

                {/* Benefit 1 */}
                <div className='border-b md:border-r border-[#CCCCCC] px-6 py-10 space-y-6'>

                    <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit1} alt="" />

                    <div className='space-y-3'>
                        <h2 className='text-lg md:text-xl font-medium text-[#181818]'>
                            Autonomous Execution
                        </h2>

                        <p className='text-[#3D3D3D] text-sm'>
                            Works with your tools: Slack, Gmail, Calendar, and more.
                        </p>
                    </div>

                </div>

                {/* Benefit 2 */}
                <div className='border-b border-[#CCCCCC] px-6 py-10 space-y-6'>

                    <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit2} alt="" />

                    <div className='space-y-3'>
                        <h2 className='text-lg md:text-xl font-medium text-[#181818]'>
                            Seamless Integration
                        </h2>

                        <p className='text-[#3D3D3D] text-sm'>
                            Runs without manual input—AI handles workflows end-to-end.
                        </p>
                    </div>

                </div>

                {/* Benefit 3 */}
                <div className='border-b md:border-r border-[#CCCCCC] px-6 py-10 space-y-6'>

                    <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit3} alt="" />

                    <div className='space-y-3'>
                        <h2 className='text-lg md:text-xl font-medium text-[#181818]'>
                            Real-Time Insights
                        </h2>

                        <p className='text-[#3D3D3D] text-sm'>
                            Summaries and updates delivered instantly, no bottlenecks.
                        </p>
                    </div>

                </div>

                {/* Benefit 4 */}
                <div className='border-b border-[#CCCCCC] px-6 py-10 space-y-6'>

                    <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit4} alt="" />

                    <div className='space-y-3'>
                        <h2 className='text-lg md:text-xl font-medium text-[#181818]'>
                            Scalable Performance
                        </h2>

                        <p className='text-[#3D3D3D] text-sm'>
                            From small teams to enterprises—built to grow with you.
                        </p>
                    </div>

                </div>

                {/* Bottom Tags */}
               

            </div>
             <div className='w-full flex flex-col  flex-wrap justify-center items-center gap-6 py-10  overflow-hidden'>

                    <div className='flex gap-4 lg:flex-nowrap w-full whitespace-nowrap justify-center mx-auto'>

                        <span className='tag bg-gray-400 text-black py-2 px-1'>Enrich CRM data</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Summarize meetings</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Schedule calls</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Generate Blog Post</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Generate Blog Post</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Generate Blog Post</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Translate documents</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Translate documents</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Draft client emails</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Draft client emails</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Translate documents</span>

                    </div>

                    <div className='flex gap-4 lg:flex-nowrap w-full whitespace-nowrap justify-center mx-auto'>

                        <span className='tag bg-gray-400 text-black py-2 px-1'>Research leads</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Create reports</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Track deadlines</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Manage tickets</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Assist shoppers</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Automate reminders</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Research leads</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Create reports</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Track deadlines</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Manage tickets</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Assist shoppers</span>
                        <span className='tag bg-gray-400 text-black py-2 px-1'>Automate reminders</span>

                    </div>

                </div>
        </div>
    )
}

export default Benefits