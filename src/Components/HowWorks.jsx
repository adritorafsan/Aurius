import works1 from '../assets/works1.png'
import works2 from '../assets/works2.png'
import works3 from '../assets/works3.png'


const HowWorks = () => {
    return (
        <div className='border border-[#CCCCCC] grid grid-cols-3 mb-15 border-b-0'>
            <div className='border-b border-b-[#CCCCCC] px-5 py-10 flex flex-col gap-y-4 col-span-3'>
                <p className='flex  items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>HOW IT WORKS</p>
                <h1 className='text-[40px] max-w-lg '>Automation in three simple steps</h1>
                <p className='text-[14px] text-[#3D3D3D] max-w-sm '>Aurius makes complex workflows effortless — from start to finish.</p>
            </div>
            <div className='flex flex-col gap-0'>
                <img className=' border border-[#CCCCCC] border-l-0 border-y-0' src={works1} alt="" />
                <div className='pt-7.5 border border-l-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
                    <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 1</p>
                    <h1 className='text-[30px]'>Connect your tools</h1>
                    <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Link Gmail, Slack, Calendar, Notion, and more in a few clicks.</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <img className=' border border-[#CCCCCC]  border-l-0 border-y-0' src={works2} alt="" />
                <div className='pt-7.5 border border-x-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
                    <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 2</p>
                    <h1 className='text-[30px]'>Let AI understand the work</h1>
                    <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Emails, tasks, and docs are scanned and summarized instantly.</p>
                </div>
            </div>
            <div className='flex flex-col '>
                <img  src={works3} alt="" />
                <div className='pt-7.5 border border-r-0 border-[#CCCCCC] px-5 py-7.5 space-y-4'>
                    <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>STEP - 3</p>
                    <h1 className='text-[30px]'>Get results, automatically</h1>
                    <p className='text-[14px] max-w-3/4 text-[#3D3D3D]'>Summaries, tasks, and scheduling handled in the background — no manual effort.</p>
                </div>
            </div>

        </div>
    )
}

export default HowWorks