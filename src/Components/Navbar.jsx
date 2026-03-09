// import logo from '../assets/logo.svg'

// const Navbar = () => {
//     const Navlinks = ["Products", "Pricing", "Blogs", "About"]
//     return (
//         <>
//             <div className='max-w-screen mx-auto border-b border-b-[#CCC]'>
//                 <nav className=" max-w-360 mx-auto py-4 px-30 ">
//                     <div className=' flex justify-between items-center cursor-pointer'>
//                         <div className='flex gap-x-1.75 justify-center items-center'>
//                             <img src={logo} alt="logo" />
//                             <h1 className='text-black text-[24px] font-medium '>Aurius</h1>
//                         </div>
//                         <div className='flex justify-center items-center gap-x-7.5'>
//                             {Navlinks.map((item, index) => {
//                                 return <a href='#' className='text-[16px] text-[#3D3D3D] font-normal hover:text-black transition ease-in duration-150' key={index}>{item}</a>
//                             })}
//                         </div>
//                         <div>
//                             <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Contact</button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </>


//     )
// }

// export default Navbar

import { useState } from "react"
import logo from '../assets/logo.svg'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const Navlinks = ["Products", "Pricing", "Blogs", "About"]

    return (
        <div className='w-full border-b border-[#CCC]'>
            <nav className="max-w-360 mx-auto py-4 px-6 md:px-10 lg:px-20">

                <div className='flex justify-between items-center'>

                    {/* Logo */}
                    <div className='flex gap-x-2 items-center cursor-pointer'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-lg md:text-xl lg:text-2xl font-medium'>
                            Aurius
                        </h1>
                    </div>

                    {/* Desktop Links */}
                    <div className='hidden md:flex items-center gap-x-6 lg:gap-x-8'>
                        {Navlinks.map((item, index) => (
                            <a
                                href="#"
                                key={index}
                                className='text-sm lg:text-base text-[#3D3D3D] hover:text-black transition duration-150'
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className='hidden md:block'>
                        <button className='bg-[#FF5101] px-4 py-2 rounded-sm text-white hover:bg-[#f9631e] transition'>
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className='md:hidden cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </div>

                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className='md:hidden flex flex-col gap-4 mt-4'>
                        {Navlinks.map((item, index) => (
                            <a
                                href="#"
                                key={index}
                                className='text-[#3D3D3D] hover:text-black'
                            >
                                {item}
                            </a>
                        ))}

                        <button className='bg-[#FF5101] px-4 py-2 rounded-sm text-white w-fit'>
                            Contact
                        </button>
                    </div>
                )}

            </nav>
        </div>
    )
}

export default Navbar