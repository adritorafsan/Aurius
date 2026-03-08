import testimg from '../assets/testimg.png'
import testimg1 from '../assets/testimg1.png'
import testimg2 from '../assets/testimg2.png'

const Testimonial = () => {
  return (
    <div className="border border-[#CCCCCC] grid grid-cols-2 mb-20">
      <div className='border-b border-b-[#CCCCCC] col-span-2 flex flex-col justify-center items-center gap-y-4 py-10'>
        <p className='flex justify-center items-center gap-x-2 text-lg font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>TESTIMONIALS</p>
        <h1 className='text-[40px] font-normal max-w-lg text-center'>Trusted by forward-thinking companies</h1>
        <p className='text-[14px] text-[#3D3D3D] max-w-sm text-center'>Aurius powers modern teams by cutting busywork and automating the essentials.</p>
      </div>

      <div className='flex col-span-2 gap-x-8 p-5 border-b border-b-[#CCCCCC]'>
        <img src={testimg} alt="" />
        <div className='flex flex-col justify-center  gap-y-16'>
          <h1 className='text-[20px] font-normal text-start'>“Aurius has completely changed the way we work. Tasks that usedto pile up and slow us down are now handled automatically. It’slike having an extra team member working around the clock.”</h1>
          <div >
            <h1 className='text-[24px]'>Adrito Rafsan</h1>
            <p className='text-[18px] text-[#3D3D3D]'>Founder , CodeCraft</p>
          </div>
        </div>
      </div>

      <div className=' space-y-16 border-r border-r-[#CCCCCC] pt-7 pb-6.5 px-5'>
        <h1 className='text-[20px] font-normal'>“The automation feels invisible yet powerful. Auriusquietly keeps everything on track so we can focuson the bigger picture. Our team is already loving it.”</h1>
        <div className=' flex gap-x-5 items-center'>
          <img className='size-10 rounded-xs' src={testimg1} alt="" />
          <div>
            <h1 className='text-[18px]'>Arian Zesan</h1>
            <p className='text-[14px] text-[#3D3D3D]'>Founder , Figicon</p>
          </div>
        </div>
      </div>

      <div className=' space-y-16 pt-7 pb-6.5 px-5'>
        <h1 className='text-[20px] font-normal'>“The automation feels invisible yet powerful. Auriusquietly keeps everything on track so we can focuson the bigger picture. Our team is already loving it.”</h1>
        <div className=' flex gap-x-5 items-center'>
          <img className='size-10 rounded-xs' src={testimg2} alt="" />
          <div >
            <h1 className='text-[18px]'>Sabirul Tanim</h1>
            <p className='text-[14px] text-[#3D3D3D]'>CEO , Father of DC</p>
          </div>
        </div>
      </div>
    

    </div>
  )
}

export default Testimonial