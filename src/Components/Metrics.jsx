

// const Metrics = () => {
//   return (
//     <div className="border border-[#CCCCCC] border-b-0 border-x-0 mt-20 grid grid-rows-2 grid-cols-3">
//         <div className=" col-span-3 border-x border-x-[#CCCCCC] border-b border-b-[#CCCCCC] py-10.75 flex flex-col justify-center items-center gap-y-4.5"> 
//             <p className=' gap-x-2 text-[#3D3D3D] text-[14px] flex  items-center'><p className="size-3 bg-[#FF5101]"></p>METRICS</p>
//             <h1 className="text-4xl font-medium ">Measurable results, every time</h1>                     
//             <p className="text-[#3D3D3D] text-[14px] font-normal max-w-lg mx-auto text-center">Aurius isn’t just another tool — it delivers speed, accuracy, and real productivity gains for modern teams.</p>                        
//         </div>
        
//             <div className="border-x border-b border-b-[#CCCCCC] border-x-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
//                 <h1 className="text-[28px] text-[#181818]">97%</h1>
//                 <p className="text-[14px] text-[#3D3D3D]">accuracy in AI-generated summaries</p>
//             </div>
//             <div className="border-r border-b border-b-[#CCCCCC] border-r-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
//                 <h1 className="text-[28px] text-[#181818]">200 + Hours</h1>
//                 <p className="text-[14px] text-[#3D3D3D]" >saved per team each month</p>
//             </div>
//             <div className="border-r border-b border-b-[#CCCCCC] border-r-[#CCCCCC] px-5 py-10 space-y-3.5 max-h-[145.2px]">
//                 <h1 className="text-[28px] text-[#181818]">3x faster</h1>
//                 <p className="text-[14px] text-[#3D3D3D]">meeting scheduling & follow-ups</p>
//             </div>
        
//     </div>
//   )
// }

// export default Metrics

const Metrics = () => {

  const metrics = [
    {
      value: "97%",
      text: "accuracy in AI-generated summaries"
    },
    {
      value: "200+ Hours",
      text: "saved per team each month"
    },
    {
      value: "3x faster",
      text: "meeting scheduling & follow-ups"
    }
  ]

  return (
    <div className="border border-[#CCCCCC] mb-20">

      {/* Header */}
      <div className=" border-b border-[#CCCCCC] flex flex-col items-center text-center py-12 px-6 gap-4">

        <p className='flex items-center gap-2 text-sm text-[#3D3D3D]'>
          <span className="size-3 bg-[#FF5101]"></span>
          METRICS
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Measurable results, every time
        </h1>

        <p className="text-[#3D3D3D] text-sm max-w-lg">
          Aurius isn’t just another tool — it delivers speed, accuracy, and real productivity gains for modern teams.
        </p>

      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

        {metrics.map((item, index) => (

          <div
            key={index}
            className="px-6 py-10 space-y-3 border-r border-r-[#CCCCCC] last:border-0"
          >

            <h2 className="text-2xl md:text-[28px] text-[#181818] font-medium">
              {item.value}
            </h2>

            <p className="text-sm text-[#3D3D3D]">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Metrics