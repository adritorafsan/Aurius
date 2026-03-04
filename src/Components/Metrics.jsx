

const Metrics = () => {
  return (
    <div className="border border-[#CCCCCC] border-b-0 border-x-0 mt-20 grid grid-rows-2 grid-cols-3">
        <div className=" col-span-3 border-x border-x-[#CCCCCC] border-b border-b-[#CCCCCC] py-10.75 flex flex-col justify-center items-center gap-y-4.5"> 
            <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className="size-3 bg-[#FF5101]"></p>METRICS</p>
            <h1 className="text-4xl font-medium ">Measurable results, every time</h1>                     
            <p className="text-[#3D3D3D] text-[14px] font-normal max-w-lg mx-auto text-center">Aurius isn’t just another tool — it delivers speed, accuracy, and real productivity gains for modern teams.</p>                        
        </div>
        
            <div className="border-x border-b border-b-[#CCCCCC] border-x-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
                <h1 className="text-[28px] text-[#181818]">97%</h1>
                <p className="text-[14px] text-[#3D3D3D]">accuracy in AI-generated summaries</p>
            </div>
            <div className="border-r border-b border-b-[#CCCCCC] border-r-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
                <h1 className="text-[28px] text-[#181818]">200 + Hours</h1>
                <p className="text-[14px] text-[#3D3D3D]" >saved per team each month</p>
            </div>
            <div className="border-r border-b border-b-[#CCCCCC] border-r-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
                <h1 className="text-[28px] text-[#181818]">3x faster</h1>
                <p className="text-[14px] text-[#3D3D3D]">meeting scheduling & follow-ups</p>
            </div>
        
    </div>
  )
}

export default Metrics