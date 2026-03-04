import action from '../assets/action.svg'
import face from '../assets/face.png'
import rightcoloumn from '../assets/rightcoloumn.png'

const Action = () => {
    return (
        <div className='mt-20 w-fit gap-0 border border-[#CCCCCC] h-fit'>
            <div className='grid grid-cols-2 grid-rows-3 divide-x divide-y h-fit'>

                <div className='pt-10 pb-15 pl-5  border-[#CCCCCC] col-span-2  space-y-4.5'>
                    <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className='size-3 bg-[#FF5101]'></p>IN ACTION</p>
                    <h1 className=' text-4xl font-medium '>Built to handle the work you shouldn’t</h1>
                    <p className='text-[#3D3D3D] font-normal text-[14px] w-[377.62px]'>From emails to scheduling, Aurius keeps your workflows moving without interruptions.</p>
                </div>

                <div className='pt-10 pb-15 pl-5 border-[#CCCCCC] space-y-5'>
                    <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className='size-3 bg-[#FF5101]'></p>IN ACTION</p>
                    <h1 className='text-4xl font-medium mb-5'>Aurius automates 1,000s of
                        tasks daily, saving teams hours
                        every week</h1>
                    <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
                </div>

                <div className='pt-10 pb-15 pl-5 border-0 flex justify-center items-center   row-span-2'><img  src={rightcoloumn} alt="Action" /></div>

                <div className='pt-10 pb-15 pl-5 border-r border-b border-[#CCCCCC]  space-y-6.75'>
                    <img  src={action} alt="action" />
                    <h3 className='text-[#3D3D3D] text-[18px] w-[385.37px]'>“Aurius streamlined our entire scheduling and
                        communication flow—what took hours now
                        happens in seconds.”</h3>
                    <div className='flex gap-x-4 items-center'>
                        <img src={face} alt="user" />
                        <div>
                            <h1 className='text-2xl font-medium '>Paul Lohim</h1>
                            <p className='text-[#3D3D3D]'>CEO, Medsync</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Action