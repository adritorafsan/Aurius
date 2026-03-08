import footerimg from '../assets/footer.png'
import ig from '../assets/ig.png'
import fb from '../assets/fb.png'
import x from '../assets/x.png'
import logo from '../assets/logo.svg'


const Footer = () => {
  return (
    <div className=" max-w-360  mx-auto border border-[#3D3D3D] border-y-0">
      <div className='py-18 px-5 flex justify-between border-b border-b-[#3D3D3D]'>
        <div className=' space-y-5 overflow-hidden'>
          <h1 className=' max-w-xl text-white text-[40px]'>Work smarter, not harder with Aurius</h1>
          <p className='max-w-md text-[#919191] text-[14px]'>Start automating tasks today and give your team more time to focus on what matters.</p>
          <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Request a demo</button>
        </div>
        <img src={footerimg} className='mb-36 ' alt="" />
      </div>

      <div className='px-5 py-15 flex justify-between items-center border-b border-b-[#3D3D3D]'>
        <div className=' space-y-12'>
          <div className=' space-y-4.5'>
            <h1 className='flex items-center text-2xl text-white'><img src={logo} alt="aurius" />Aurius</h1>
            <p className='text-[#919191] text-[14px]'>AI-powered automation for modern teams.</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <img className='p-4 rounded-full border border-[#3D3D3D]' src={ig} alt="loading..." />
            <img className='p-4 rounded-full border border-[#3D3D3D]' src={fb} alt="loading..." />
            <img className='p-4 rounded-full border border-[#3D3D3D]' src={x} alt="loading..." />
          </div>
        </div>
        <div className='flex gap-x-22  pr-21.5'>

          <div className=' space-y-5.75'>
            <h1 className='text-[15px] text-white'>Company</h1>
            <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
              <li >Pricing</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className=' space-y-5.75'>
            <h1 className='text-[15px] text-white'>Others</h1>
            <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
              <li >Privacy Policy</li>
              <li>404</li>
              
            </ul>
          </div>

          <div className=' space-y-5.75'>
            <h1 className='text-[15px] text-white'>Products</h1>
            <ul className=' flex flex-col gap-y-5 text-[14px] text-[#919191]'>
              <li >Automated emails</li>
              <li>Scheluding</li>
              <li>Task automation</li>
              <li>Smart summaries</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center p-5'>
        <p className='text-[14px] text-[#919191]'>© 2026 Aurius. All rights reserved.</p>
        <p className='text-[14px] text-[#919191]'>CodeCraft</p>
        <h1 className='text-[14px] text-[#919191]'>Made by <span className='text-xl text-white'>Adrito Rafsan</span></h1>
      </div>
    </div>
  )
}

export default Footer