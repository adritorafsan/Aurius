// import action from '../assets/action.svg'
// import face from '../assets/face.png'
// import rightcoloumn from '../assets/rightcoloumn.png'

// const Action = () => {
//     return (
//         <div className='mb-20 w-fit gap-0 border border-[#CCCCCC] h-fit'>
//             <div className='grid grid-cols-2 grid-rows-3 divide-x divide-y h-fit'>

//                 <div className='pt-10 pb-15 pl-5  border-[#CCCCCC] col-span-2  space-y-4.5'>
//                     <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className='size-3 bg-[#FF5101]'></p>IN ACTION</p>
//                     <h1 className=' text-4xl font-medium '>Built to handle the work you shouldn’t</h1>
//                     <p className='text-[#3D3D3D] font-normal text-[14px] w-[377.62px]'>From emails to scheduling, Aurius keeps your workflows moving without interruptions.</p>
//                 </div>

//                 <div className='pt-10 pb-15 pl-5 border-[#CCCCCC] space-y-5'>
//                     <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className='size-3 bg-[#FF5101]'></p>IN ACTION</p>
//                     <h1 className='text-4xl font-medium mb-5'>Aurius automates 1,000s of
//                         tasks daily, saving teams hours
//                         every week</h1>
//                     <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
//                 </div>

//                 <div className='pt-10 pb-15 pl-5 border-0 flex justify-center items-center   row-span-2'><img  src={rightcoloumn} alt="Action" /></div>

//                 <div className='pt-10 pb-15 pl-5 border-r border-b border-[#CCCCCC]  space-y-6.75'>
//                     <img  src={action} alt="action" />
//                     <h3 className='text-[#3D3D3D] text-[18px] w-[385.37px]'>“Aurius streamlined our entire scheduling and
//                         communication flow—what took hours now
//                         happens in seconds.”</h3>
//                     <div className='flex gap-x-4 items-center'>
//                         <img src={face} alt="user" />
//                         <div>
//                             <h1 className='text-2xl font-medium '>Paul Lohim</h1>
//                             <p className='text-[#3D3D3D]'>CEO, Medsync</p>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Action

import action from '../assets/action.svg'
import face from '../assets/face.png'
import rightcoloumn from '../assets/rightcoloumn.png'

const Action = () => {
    return (
        <div className='mb-20 border border-[#CCCCCC]'>

            <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x'>

                {/* Top Header */}
                <div className='col-span-1 md:col-span-2 p-6 md:p-10 space-y-4 border-b border-r-0 border-b-[#CCCCCC]'>

                    <p className='flex items-center gap-2 text-[#3D3D3D] text-sm'>
                        <span className='size-3 bg-[#FF5101]'></span>
                        IN ACTION
                    </p>

                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
                        Built to handle the work you shouldn’t
                    </h1>

                    <p className='text-[#3D3D3D] text-sm md:text-base max-w-100'>
                        From emails to scheduling, Aurius keeps your workflows moving without interruptions.
                    </p>

                </div>

                {/* Left Content */}
                <div className='p-6 md:p-10 space-y-6 border-b-0 border-r border-r-[#CCCCCC] '>

                    <p className='flex items-center gap-2 text-[#3D3D3D] text-sm'>
                        <span className='size-3 bg-[#FF5101]'></span>
                        IN ACTION
                    </p>

                    <h2 className='text-2xl md:text-3xl font-medium'>
                        Aurius automates 1,000s of tasks daily,
                        saving teams hours every week
                    </h2>

                    <button className='bg-[#FF5101] px-4 py-2 rounded-sm text-white hover:bg-[#f9631e] transition'>
                        Request a demo
                    </button>

                </div>

                {/* Right Image */}
                <div className='flex items-center justify-center p-6 md:p-10 border-0'>

                    <img
                        src={rightcoloumn}
                        alt="Action"
                        className='w-full max-w-100'
                    />

                </div>

                {/* Testimonial */}
                <div className='p-6 md:p-10 md:col-span-2 space-y-6 border-t border-[#CCCCCC]'>

                    <img src={action} alt="action icon" />

                    <h3 className='text-[#3D3D3D] text-base md:text-lg max-w-105'>
                        “Aurius streamlined our entire scheduling and communication flow—
                        what took hours now happens in seconds.”
                    </h3>

                    <div className='flex items-center gap-4'>

                        <img src={face} alt="user" className='w-12 h-12 rounded-full'/>

                        <div>
                            <h4 className='text-lg font-medium'>Paul Lohim</h4>
                            <p className='text-[#3D3D3D] text-sm'>CEO, Medsync</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Action