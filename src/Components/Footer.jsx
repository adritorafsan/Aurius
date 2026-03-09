// import footerimg from '../assets/footer.png'
// import ig from '../assets/ig.png'
// import fb from '../assets/fb.png'
// import x from '../assets/x.png'
// import logo from '../assets/logo.svg'


// const Footer = () => {
//   return (
//     <div className=" max-w-360  mx-auto border border-[#3D3D3D] border-y-0">
//       <div className='py-18 px-5 flex justify-between border-b border-b-[#3D3D3D]'>
//         <div className=' space-y-5 overflow-hidden'>
//           <h1 className=' max-w-xl text-white text-[40px]'>Work smarter, not harder with Aurius</h1>
//           <p className='max-w-md text-[#919191] text-[14px]'>Start automating tasks today and give your team more time to focus on what matters.</p>
//           <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
//         </div>
//         <img src={footerimg} className='mb-36 ' alt="" />
//       </div>

//       <div className='px-5 py-15 flex justify-between items-center border-b border-b-[#3D3D3D]'>
//         <div className=' space-y-12'>
//           <div className=' space-y-4.5'>
//             <h1 className='flex items-center text-2xl text-white'><img src={logo} alt="aurius" />Aurius</h1>
//             <p className='text-[#919191] text-[14px]'>AI-powered automation for modern teams.</p>
//           </div>
//           <div className='flex items-center gap-x-2'>
//             <img className='p-4 rounded-full border border-[#3D3D3D]' src={ig} alt="loading..." />
//             <img className='p-4 rounded-full border border-[#3D3D3D]' src={fb} alt="loading..." />
//             <img className='p-4 rounded-full border border-[#3D3D3D]' src={x} alt="loading..." />
//           </div>
//         </div>
//         <div className='flex gap-x-22  pr-21.5'>

//           <div className=' space-y-5.75'>
//             <h1 className='text-[15px] text-white'>Company</h1>
//             <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
//               <li >Pricing</li>
//               <li>About</li>
//               <li>Blog</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           <div className=' space-y-5.75'>
//             <h1 className='text-[15px] text-white'>Others</h1>
//             <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
//               <li >Privacy Policy</li>
//               <li>404</li>
              
//             </ul>
//           </div>

//           <div className=' space-y-5.75'>
//             <h1 className='text-[15px] text-white'>Products</h1>
//             <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
//               <li >Automated emails</li>
//               <li>Scheluding</li>
//               <li>Task automation</li>
//               <li>Smart summaries</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className='flex justify-between items-center p-5'>
//         <p className='text-[14px] text-[#919191]'>© 2026 Aurius. All rights reserved.</p>
//         <p className='text-[14px] text-[#919191]'>CodeCraft</p>
//         <h1 className='text-[14px] text-[#919191]'>Made by <span className='text-xl text-white'>Adrito Rafsan</span></h1>
//       </div>
//     </div>
//   )
// }

// export default Footer


import footerimg from '../assets/footer.png'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import x from '../assets/x.png'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className="max-w-360 mx-auto border border-[#3D3D3D] border-y-0 bg-[#0A0A0A]">
      {/* Top CTA Section */}
      <div className='py-12 lg:py-18 px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center border-b border-[#3D3D3D] gap-10'>
        <div className='space-y-5 text-center lg:text-left'>
          <h1 className='max-w-xl text-white text-3xl md:text-[40px] leading-tight'>
            Work smarter, not harder with Aurius
          </h1>
          <p className='max-w-md mx-auto lg:mx-0 text-[#919191] text-[14px]'>
            Start automating tasks today and give your team more time to focus on what matters.
          </p>
          <div className='flex justify-center lg:justify-start'>
            <button className='bg-[#FF5101] px-6 py-3 rounded-sm text-white hover:bg-[#f9631e] cursor-pointer transition-all'>
              Request a demo
            </button>
          </div>
        </div>
        {/* Image hidden on mobile to save space, visible from large screens up */}
        <img src={footerimg} className='hidden lg:block max-w-sm xl:max-w-md' alt="Aurius dashboard" />
      </div>

      {/* Main Navigation Links Section */}
      <div className='px-6 lg:px-10 py-12 lg:py-15 flex flex-col lg:flex-row justify-between gap-y-12 border-b border-[#3D3D3D]'>
        {/* Brand & Socials */}
        <div className='space-y-8 min-w-62.5'>
          <div className='space-y-4'>
            <h1 className='flex items-center gap-2 text-2xl text-white font-semibold'>
              <img src={logo} alt="aurius" className="size-8" />
              Aurius
            </h1>
            <p className='text-[#919191] text-[14px] max-w-xs'>
              AI-powered automation for modern teams.
            </p>
          </div>
          <div className='flex items-center gap-x-3'>
            {[ig, fb, x].map((icon, index) => (
              <a key={index} href="#" className='p-3 rounded-full border border-[#3D3D3D] hover:border-[#FF5101] transition-colors'>
                <img className='size-5 object-contain' src={icon} alt="social icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Link Grids */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-22 gap-y-10'>
          <div className='space-y-5'>
            <h1 className='text-[15px] font-semibold text-white'>Company</h1>
            <ul className='flex flex-col gap-y-4 text-[14px] text-[#919191]'>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          <div className='space-y-5'>
            <h1 className='text-[15px] font-semibold text-white'>Products</h1>
            <ul className='flex flex-col gap-y-4 text-[14px] text-[#919191]'>
              <li className="hover:text-white cursor-pointer transition-colors">Automated emails</li>
              <li className="hover:text-white cursor-pointer transition-colors">Scheduling</li>
              <li className="hover:text-white cursor-pointer transition-colors">Task automation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Smart summaries</li>
            </ul>
          </div>

          <div className='space-y-5 col-span-2 md:col-span-1'>
            <h1 className='text-[15px] font-semibold text-white'>Others</h1>
            <ul className='flex flex-col gap-y-4 text-[14px] text-[#919191]'>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">404 Page</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Credits Bar */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 p-6 lg:p-6 text-center md:text-left'>
        <p className='text-[13px] text-[#919191]'>© 2026 Aurius. All rights reserved.</p>
        <p className='text-[13px] text-[#919191] font-medium tracking-widest uppercase'>CodeCraft</p>
        <h1 className='text-[14px] text-[#919191] flex items-center gap-2'>
          Made by <span className='text-lg text-white font-medium'>Adrito Rafsan</span>
        </h1>
      </div>
    </div>
  )
}

export default Footer