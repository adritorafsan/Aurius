// import HeroImg from '../assets/Hero.png'
// import biosynthesis from '../assets/biosynthesis.svg'
// import command from '../assets/command.svg'
// import globalbank from '../assets/globalbank.svg'
// import hourglass from '../assets/hourglass.svg'
// import quotient from '../assets/quotient.svg'

// const Hero = () => {
//     return (
//         <div className=" border border-t-0 mb-20  border-[#CCC]">
//             <div className='mx-5 pt-25 flex flex-col justify-center items-center gap-y-4'>
//                 <div className='text-center space-y-4.25'>
//                     <p className='text-base/tight text-[56px] font-medium text-black'>AI Agents that automate <p className='text-[56px] font-medium text-black'>modern workflows</p></p>
//                     <p className='text-[16px] text-base/tight text-[#3D3D3D]'>Aurius handles tasks like emails, summaries, and <p>scheduling so you don’t have to.</p> </p>
//                 </div>
//                 <div className='flex gap-x-3.75'>
//                     <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
//                     <button className="border border-[#CCC] bg-transparent px-3 py-1 rounded-sm hover:text-[#f9631e] cursor-pointer">Start Now</button>
//                 </div>
//             </div>
//             <div className='mt-10 mx-5'>
//                 <img className=' shadow-md rounded-2xl' src={HeroImg} alt="HeroImg" />
//             </div>
//             <div className='mt-10 mb-6'>
//                 <p className='mb-5 text-center text-[#3D3D3D] text-[12px] uppercase font-medium'>Trusted by 500+ companies worldwide</p>
               
//                 <marquee behavior="alternate">
//                     <div className='flex justify-center items-center gap-x-20'>
//                          <img src={biosynthesis} alt="" />
//                     <img src={command} alt="" />
//                     <img src={globalbank} alt="" />
//                     <img src={hourglass} alt="" />
//                     <img src={quotient} alt="" />
//                     </div>
                   
//                 </marquee>
//             </div>
//         </div>
//     )
// }

// export default Hero

import HeroImg from '../assets/Hero.png'
import biosynthesis from '../assets/biosynthesis.svg'
import command from '../assets/command.svg'
import globalbank from '../assets/globalbank.svg'
import hourglass from '../assets/hourglass.svg'
import quotient from '../assets/quotient.svg'

const Hero = () => {

    const companies = [biosynthesis, command, globalbank, hourglass, quotient]

    return (
        <div className="border border-t-0 border-[#CCC] mb-20">

            {/* Hero Content */}
            <div className='max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 pt-16 md:pt-24 flex flex-col items-center gap-y-6'>

                <div className='text-center space-y-4'>

                    <h1 className='font-medium text-black leading-tight
                    text-3xl sm:text-4xl md:text-5xl lg:text-[56px]'>

                        AI Agents that automate <br className='hidden sm:block'/>
                        modern workflows

                    </h1>

                    <p className='text-[#3D3D3D] leading-relaxed
                    text-sm md:text-base max-w-[600px] mx-auto'>

                        Aurius handles tasks like emails, summaries, and scheduling
                        so you don’t have to.

                    </p>

                </div>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row gap-3'>

                    <button className='bg-[#FF5101] px-5 py-2 rounded-sm text-white hover:bg-[#f9631e] transition'>
                        Request a demo
                    </button>

                    <button className="border border-[#CCC] px-5 py-2 rounded-sm hover:text-[#f9631e] transition">
                        Start Now
                    </button>

                </div>

            </div>

            {/* Hero Image */}
            <div className='max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 mt-12'>
                <img
                    className='w-full shadow-md rounded-2xl'
                    src={HeroImg}
                    alt="Hero"
                />
            </div>

            {/* Companies */}
            <div className='mt-12 mb-8'>

                <p className='text-center text-[#3D3D3D] text-xs uppercase font-medium mb-6'>
                    Trusted by 500+ companies worldwide
                </p>

                <div className='overflow-x-auto'>
                    <div className='flex items-center justify-center gap-12 min-w-max px-6'>
                        {companies.map((logo, index) => (
                            <img key={index} src={logo} alt="company logo" className='h-6 opacity-80'/>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero