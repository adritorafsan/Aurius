import HeroImg from '../assets/Hero.png'
import biosynthesis from '../assets/biosynthesis.svg'
import command from '../assets/command.svg'
import globalbank from '../assets/globalbank.svg'
import hourglass from '../assets/hourglass.svg'
import quotient from '../assets/quotient.svg'

const Hero = () => {
    return (
        <div className=" border border-t-0 mb-20  border-[#CCC]">
            <div className='mx-5 pt-25 flex flex-col justify-center items-center gap-y-4'>
                <div className='text-center space-y-4.25'>
                    <p className='text-base/tight text-[56px] font-medium text-black'>AI Agents that automate <p className='text-[56px] font-medium text-black'>modern workflows</p></p>
                    <p className='text-[16px] text-base/tight text-[#3D3D3D]'>Aurius handles tasks like emails, summaries, and <p>scheduling so you don’t have to.</p> </p>
                </div>
                <div className='flex gap-x-3.75'>
                    <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
                    <button className="border border-[#CCC] bg-transparent px-3 py-1 rounded-sm hover:text-[#f9631e] cursor-pointer">Start Now</button>
                </div>
            </div>
            <div className='mt-10 mx-5'>
                <img className=' shadow-md rounded-2xl' src={HeroImg} alt="HeroImg" />
            </div>
            <div className='mt-10 mb-6'>
                <p className='mb-5 text-center text-[#3D3D3D] text-[12px] uppercase font-medium'>Trusted by 500+ companies worldwide</p>
               
                <marquee behavior="alternate">
                    <div className='flex justify-center items-center gap-x-20'>
                         <img src={biosynthesis} alt="" />
                    <img src={command} alt="" />
                    <img src={globalbank} alt="" />
                    <img src={hourglass} alt="" />
                    <img src={quotient} alt="" />
                    </div>
                   
                </marquee>
            </div>
        </div>
    )
}

export default Hero