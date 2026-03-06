import benefit1 from '../assets/benefit1.svg'
import benefit2 from '../assets/benefit2.svg'
import benefit3 from '../assets/benefit3.svg'
import benefit4 from '../assets/benefit4.svg'

const Benefits = () => {
    return (
        <div className='border border-[#CCCCCC] grid grid-cols-2 grid-rows-4'>
            <div className='border-b border-b-[#CCCCCC] col-span-2 flex flex-col justify-center items-center gap-y-4'>
                <p className='flex justify-center items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>BENEFITS</p>
                <h1 className='text-[40px] text-[#181818]'>Smarter workflows, zero friction</h1>
                <p className='text-[#3D3D3D] text-[14px] max-w-md mx-auto text-center'>From automation to insights, everything works seamlessly in the background.</p>
            </div>
            <div className='border-b border-r border-[#CCCCCC] px-5 py-10 space-y-10'>
                <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit1} alt="" />
                <div className=' space-y-3.5'>
                    <h1 className='text-[22px] text-[#181818] font-medium'>Autonomous Execution</h1>
                    <p className='text-[#3D3D3D] text-[14px]'>Works with your tools: Slack, Gmail, Calendar, and more.</p>
                </div>
            </div>
            <div className=' px-5 py-10 space-y-10'>
                <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit2} alt="" />
                <div className=' space-y-3.5'>
                    <h1 className='text-[22px] text-[#181818] font-medium'>Seamless Integration</h1>
                    <p className='text-[#3D3D3D] text-[14px]'>Runs without manual input—AI handles workflows end-to-end.</p>
                </div>
            </div>
            <div className='border-b border-r border-[#CCCCCC] px-5 py-10 space-y-10'>
                <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit3} alt="" />
                <div className=' space-y-3.5'>
                    <h1 className='text-[22px] text-[#181818] font-medium'>Real-Time Insights</h1>
                    <p className='text-[#3D3D3D] text-[14px]'>Summaries and updates delivered instantly, no bottlenecks.</p>
                </div>
            </div>
            <div className='border-b border-t border-[#CCCCCC] px-5 py-10 space-y-10'>
                <img className='p-2 rounded-sm bg-[#FF5101]' src={benefit4} alt="" />
                <div className=' space-y-3.5'>
                    <h1 className='text-[22px] text-[#181818] font-medium'>Scalable Performance</h1>
                    <p className='text-[#3D3D3D] text-[14px]'>From small teams to enterprises—built to grow with you.</p>
                </div>
            </div>
            <div className=' flex justify-center items-center flex-col gap-y-8 col-span-2 overflow-hidden'>
                <div className='flex  gap-x-5 w-max whitespace-nowrap'>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Enrich CRM data</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Summarize meetings</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Schedule calls</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Generate Blog Post</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Enrich CRM data</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>translate documents</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Draft client emails</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Summarize meetings</p>
                </div>
                <div className='flex  gap-x-5 w-max whitespace-nowrap'>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Research leads</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Track deadlines</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Manage tickets</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Research leads</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Assist shoppers</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Automate reminders</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
                    <p className='text-[14px] py-2.5 px-5 bg-[#F9F4F0] text-center'>Create reports</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits