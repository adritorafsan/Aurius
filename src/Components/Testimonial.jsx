// import testimg from '../assets/testimg.png'
// import testimg1 from '../assets/testimg1.png'
// import testimg2 from '../assets/testimg2.png'

// const Testimonial = () => {
//   return (
//     <div className="border border-[#CCCCCC] grid grid-cols-2 mb-20">
//       <div className='border-b border-b-[#CCCCCC] col-span-2 flex flex-col justify-center items-center gap-y-4 py-10'>
//         <p className='flex justify-center items-center gap-x-2 text-lg font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>TESTIMONIALS</p>
//         <h1 className='text-[40px] font-normal max-w-lg text-center'>Trusted by forward-thinking companies</h1>
//         <p className='text-[14px] text-[#3D3D3D] max-w-sm text-center'>Aurius powers modern teams by cutting busywork and automating the essentials.</p>
//       </div>

//       <div className='flex col-span-2 gap-x-8 p-5 border-b border-b-[#CCCCCC]'>
//         <img src={testimg} alt="" />
//         <div className='flex flex-col justify-center  gap-y-16'>
//           <h1 className='text-[20px] font-normal text-start'>“Aurius has completely changed the way we work. Tasks that usedto pile up and slow us down are now handled automatically. It’slike having an extra team member working around the clock.”</h1>
//           <div >
//             <h1 className='text-[24px]'>Adrito Rafsan</h1>
//             <p className='text-[18px] text-[#3D3D3D]'>Founder , CodeCraft</p>
//           </div>
//         </div>
//       </div>

//       <div className=' space-y-16 border-r border-r-[#CCCCCC] pt-7 pb-6.5 px-5'>
//         <h1 className='text-[20px] font-normal'>“The automation feels invisible yet powerful. Auriusquietly keeps everything on track so we can focuson the bigger picture. Our team is already loving it.”</h1>
//         <div className=' flex gap-x-5 items-center'>
//           <img className='size-10 rounded-xs' src={testimg1} alt="" />
//           <div>
//             <h1 className='text-[18px]'>Arian Zesan</h1>
//             <p className='text-[14px] text-[#3D3D3D]'>Founder , Figicon</p>
//           </div>
//         </div>
//       </div>

//       <div className=' space-y-16 pt-7 pb-6.5 px-5'>
//         <h1 className='text-[20px] font-normal'>“The automation feels invisible yet powerful. Auriusquietly keeps everything on track so we can focuson the bigger picture. Our team is already loving it.”</h1>
//         <div className=' flex gap-x-5 items-center'>
//           <img className='size-10 rounded-xs' src={testimg2} alt="" />
//           <div >
//             <h1 className='text-[18px]'>Sabirul Tanim</h1>
//             <p className='text-[14px] text-[#3D3D3D]'>CEO , Father of DC</p>
//           </div>
//         </div>
//       </div>
    

//     </div>
//   )
// }

// export default Testimonial



import testimg from '../assets/testimg.png'
import testimg1 from '../assets/testimg1.png'
import testimg2 from '../assets/testimg2.png'

const Testimonial = () => {
  return (
    <div className="border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-2 mb-20">
      {/* Header Section */}
      <div className='border-b border-[#CCCCCC] col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-y-4 py-10 px-5'>
        <div className='flex justify-center items-center gap-x-2 text-lg font-normal text-[#3D3D3D]'>
          <span className='size-3 bg-[#FF5101]'></span>
          TESTIMONIALS
        </div>
        <h1 className='text-3xl md:text-[40px] leading-tight font-normal max-w-lg text-center'>
          Trusted by forward-thinking companies
        </h1>
        <p className='text-[14px] text-[#3D3D3D] max-w-sm text-center'>
          Aurius powers modern teams by cutting busywork and automating the essentials.
        </p>
      </div>

      {/* Main Featured Testimonial */}
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-8 p-6 md:p-10 border-b border-[#CCCCCC]'>
        <img src={testimg} alt="Featured testimonial" className="w-full md:w-auto object-cover rounded-sm" />
        <div className='flex flex-col justify-center gap-y-10 md:gap-y-16'>
          <h1 className='text-xl md:text-[24px] lg:text-[26px] font-normal text-start leading-relaxed'>
            “Aurius has completely changed the way we work. Tasks that used to pile up and slow us down are now handled automatically. It’s like having an extra team member working around the clock.”
          </h1>
          <div>
            <h1 className='text-2xl font-medium'>Adrito Rafsan</h1>
            <p className='text-lg text-[#3D3D3D]'>Founder, CodeCraft</p>
          </div>
        </div>
      </div>

      {/* Bottom Testimonial 1 */}
      <div className='flex flex-col justify-between space-y-10 border-b md:border-b-0 md:border-r border-[#CCCCCC] pt-8 pb-8 px-6 md:px-10'>
        <h1 className='text-[18px] md:text-[20px] font-normal leading-relaxed'>
          “The automation feels invisible yet powerful. Aurius quietly keeps everything on track so we can focus on the bigger picture. Our team is already loving it.”
        </h1>
        <div className='flex gap-x-5 items-center'>
          <img className='size-12 rounded-sm object-cover' src={testimg1} alt="Arian Zesan" />
          <div>
            <h1 className='text-[18px] font-medium'>Arian Zesan</h1>
            <p className='text-[14px] text-[#3D3D3D]'>Founder, Figicon</p>
          </div>
        </div>
      </div>

      {/* Bottom Testimonial 2 */}
      <div className='flex flex-col justify-between space-y-10 pt-8 pb-8 px-6 md:px-10'>
        <h1 className='text-[18px] md:text-[20px] font-normal leading-relaxed'>
          “The automation feels invisible yet powerful. Aurius quietly keeps everything on track so we can focus on the bigger picture. Our team is already loving it.”
        </h1>
        <div className='flex gap-x-5 items-center'>
          <img className='size-12 rounded-sm object-cover' src={testimg2} alt="Sabirul Tanim" />
          <div>
            <h1 className='text-[18px] font-medium'>Sabirul Tanim</h1>
            <p className='text-[14px] text-[#3D3D3D]'>CEO, Father of DC</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial