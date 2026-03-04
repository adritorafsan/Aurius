import logo from '../assets/logo.svg'

const Navbar = () => {
    const Navlinks = ["Products", "Pricing", "Blogs", "About"]
    return (
        <>
            <div className='max-w-screen mx-auto border-b border-b-[#CCC]'>
                <nav className=" max-w-360 mx-auto py-4 px-30 ">
                    <div className=' flex justify-between items-center cursor-pointer'>
                        <div className='flex gap-x-1.75 justify-center items-center'>
                            <img src={logo} alt="logo" />
                            <h1 className='text-black text-[24px] font-medium '>Aurius</h1>
                        </div>
                        <div className='flex justify-center items-center gap-x-7.5'>
                            {Navlinks.map((item, index) => {
                                return <a href='#' className='text-[16px] text-[#3D3D3D] font-normal hover:text-black transition ease-in duration-150' key={index}>{item}</a>
                            })}
                        </div>
                        <div>
                            <button className='bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Contact</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>


    )
}

export default Navbar