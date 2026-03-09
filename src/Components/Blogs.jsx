// import blog1 from '../assets/blog1.png'
// import blogpic1 from '../assets/blogpic1.png'
// import blogpic2 from '../assets/blogpic2.png'
// import blogpic3 from '../assets/blogpic3.png'

// const Blogs = () => {
//     return (
//         <div className='border border-[#CCCCCC] grid grid-cols-3 mb-15'>
//             <div className='border-b border-b-[#CCCCCC] col-span-3 px-5 py-15 flex justify-between items-end'>
//                 <div className=' flex flex-col gap-y-4'>
//                     <p className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>BLOGS</p>
//                     <h1 className='text-[40px] max-w-md'>Expert insights on automations</h1>
//                     <p className='text-[14px] max-w-3xs text-[#3D3D3D]'>Explore insights, playbooks, and product updates from Aurius.</p>
//                 </div>
//                 <button className='bg-[#FF5101] px-4 py-2 mb-0 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Explore all blogs</button>
//             </div>

//             <div className=' cursor-pointer'>
//                 <img className='border border-[#CCCCCC] border-l-0 border-t-0' src={blog1} alt="" />
//                 <div className=' space-y-8 p-5 border border-[#CCCCCC] border-l-0 border-y-0'>
//                     <div className=' space-y-4.5'>
//                         <p className='flex  items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>Aug 19, 2025</p>
//                         <h1 className='text-2xl font-medium'>The road ahead: what’s next for Aurius in 2025</h1>
//                         <p className='text-[14px] text-[#3D3D3D]'>A sneak peek into our product roadmap,new features, and how we’re building the future of automation together.</p>
//                     </div>
//                     <div className='flex items-center gap-x-3'>
//                         <img src={blogpic1} alt="" />
//                         <h1 className=' font-normal text-xl text-[#3D3D3D]'>Adrito Rafsan</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className=' cursor-pointer'>
//                 <img className='border border-[#CCCCCC] border-l-0 border-t-0' src={blog1} alt="" />
//                 <div className=' space-y-8 p-5 border border-[#CCCCCC] border-l-0 border-y-0'>
//                     <div className=' space-y-4.5'>
//                         <p className='flex  items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>Sep 4, 2025</p>
//                         <h1 className='text-2xl font-medium'>Automation myths: what teams get wrong</h1>
//                         <p className='text-[14px] text-[#3D3D3D]'>Many teams avoid automation becausethey assume it’s too costly, toocomplicated, or only for large companies.</p>
//                     </div>
//                     <div className='flex items-center gap-x-3'>
//                         <img src={blogpic2} alt="" />
//                         <h1 className=' font-normal text-xl text-[#3D3D3D]'>Arian Zesan</h1>
//                     </div>
//                 </div>
//             </div>

//             <div className=' cursor-pointer'>
//                 <img className='border border-[#CCCCCC] border-x-0 border-t-0' src={blog1} alt="" />
//                 <div className=' space-y-8 p-5 border-0 '>
//                     <div className=' space-y-4.5'>
//                         <p className='flex  items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>Sep 17, 2026</p>
//                         <h1 className='text-2xl font-medium'>How automation improves team collaboration</h1>
//                         <p className='text-[14px] text-[#3D3D3D]'>When teams run on disconnected tools,efficiency suffers. Learn how automation bridges gaps and keeps everyone aligned.</p>
//                     </div>
//                     <div className='flex items-center gap-x-3'>
//                         <img src={blogpic3} alt="" />
//                         <h1 className=' font-normal text-xl text-[#3D3D3D]'>Sabirul Tanim</h1>
//                     </div>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Blogs

import blog1 from '../assets/blog1.png'
import blogpic1 from '../assets/blogpic1.png'
import blogpic2 from '../assets/blogpic2.png'
import blogpic3 from '../assets/blogpic3.png'

const Blogs = () => {
    return (
        <div className='border border-[#CCCCCC] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-15'>
            {/* Header Section */}
            <div className='border-b border-[#CCCCCC] col-span-1 md:col-span-2 lg:col-span-3 px-5 py-10 lg:py-15 flex flex-col md:flex-row justify-between md:items-end gap-6'>
                <div className='flex flex-col gap-y-4'>
                    <div className='flex items-center gap-x-2 text-md font-normal text-[#3D3D3D]'>
                        <span className='size-3 bg-[#FF5101]'></span>
                        BLOGS
                    </div>
                    <h1 className='text-3xl md:text-[40px] leading-tight max-w-md'>
                        Expert insights on automations
                    </h1>
                    <p className='text-[14px] max-w-xs text-[#3D3D3D]'>
                        Explore insights, playbooks, and product updates from Aurius.
                    </p>
                </div>
                <button className='w-fit bg-[#FF5101] px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] transition-colors cursor-pointer'>
                    Explore all blogs
                </button>
            </div>

            {/* Blog Post 1 */}
            <div className='group cursor-pointer border-b md:border-r border-[#CCCCCC] lg:border-b-0'>
                <img className='w-full object-cover border-b border-[#CCCCCC]' src={blog1} alt="Blog roadmap" />
                <div className='space-y-8 p-5'>
                    <div className='space-y-4.5'>
                        <div className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'>
                            <span className='size-3 bg-[#FF5101]'></span>
                            Aug 19, 2025
                        </div>
                        <h1 className='text-2xl font-medium group-hover:text-[#FF5101] transition-colors'>
                            The road ahead: what’s next for Aurius in 2025
                        </h1>
                        <p className='text-[14px] text-[#3D3D3D]'>
                            A sneak peek into our product roadmap, new features, and how we’re building the future of automation together.
                        </p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <img className="size-10 rounded-full" src={blogpic1} alt="Adrito Rafsan" />
                        <h1 className='font-normal text-xl text-[#3D3D3D]'>Adrito Rafsan</h1>
                    </div>
                </div>
            </div>

            {/* Blog Post 2 */}
            <div className='group cursor-pointer border-b lg:border-b-0 lg:border-r border-[#CCCCCC]'>
                <img className='w-full object-cover border-b border-[#CCCCCC]' src={blog1} alt="Automation myths" />
                <div className='space-y-8 p-5'>
                    <div className='space-y-4.5'>
                        <div className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'>
                            <span className='size-3 bg-[#FF5101]'></span>
                            Sep 4, 2025
                        </div>
                        <h1 className='text-2xl font-medium group-hover:text-[#FF5101] transition-colors'>
                            Automation myths: what teams get wrong
                        </h1>
                        <p className='text-[14px] text-[#3D3D3D]'>
                            Many teams avoid automation because they assume it’s too costly, too complicated, or only for large companies.
                        </p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <img className="size-10 rounded-full" src={blogpic2} alt="Arian Zesan" />
                        <h1 className='font-normal text-xl text-[#3D3D3D]'>Arian Zesan</h1>
                    </div>
                </div>
            </div>

            {/* Blog Post 3 */}
            <div className='group cursor-pointer md:col-span-2 lg:col-span-1 border-t md:border-t-0 border-[#CCCCCC]'>
                <img className='w-full object-cover border-b border-[#CCCCCC]' src={blog1} alt="Collaboration" />
                <div className='space-y-8 p-5'>
                    <div className='space-y-4.5'>
                        <div className='flex items-center gap-x-2 text-sm font-normal text-[#3D3D3D]'>
                            <span className='size-3 bg-[#FF5101]'></span>
                            Sep 17, 2026
                        </div>
                        <h1 className='text-2xl font-medium group-hover:text-[#FF5101] transition-colors'>
                            How automation improves team collaboration
                        </h1>
                        <p className='text-[14px] text-[#3D3D3D]'>
                            When teams run on disconnected tools, efficiency suffers. Learn how automation bridges gaps and keeps everyone aligned.
                        </p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <img className="size-10 rounded-full" src={blogpic3} alt="Sabirul Tanim" />
                        <h1 className='font-normal text-xl text-[#3D3D3D]'>Sabirul Tanim</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs