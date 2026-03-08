import { h1 } from "motion/react-client";
import { useState } from "react"


const Pricing = () => {
    const [biling, setBiling] = useState("annually");
    const starter = ["100 tasks/month", "Email automation", "Meeting summaries", "Google Calendar integration", "Slack notifications", "Basic support"];

    const pro = ["Everything in Starter", "1,000 tasks/month", "Priority email automation", "Advanced meeting summaries", "Multi-calendar sync", "Slack & Teams notifications"];

    const enterprise = ["Everything in Pro", "Unlimited tasks/month", "Dedicated account manager", "Custom integrations", "Advanced analytics & reporting", "24/7 priority support"];
    return (
        <div className="border border-[#CCCCCC] grid grid-cols-3 mb-20">
            <div className="border-b border-b-[#CCCCCC] col-span-3 pt-15 pb-8 flex flex-col justify-center items-center gap-y-11">
                <div className=" space-y-3 text-center">
                    <p className='flex justify-center items-center gap-x-2 text-xl font-normal text-[#3D3D3D]'><p className='size-3 bg-[#FF5101]'></p>PRICING</p>
                    <h1 className=" text-[40px] font-normal">Simple, flexible plans</h1>
                    <p className="text-[#3D3D3D] text-[14px] max-w-2/3 mx-auto text-center">Choose the right plan for your team and scale as you grow.</p>
                </div>
                <div className="p-1 border rounded-[50px] border-[#CCCCCC] space-x-1">
                    <button
                        onClick={() => setBiling("annually")}
                        className={`cursor-pointer px-6 py-3.5 rounded-[50px] hover:border border-[#CCCCCC] hover:text-black ${biling === "annually" ?"bg-black text-white hover:text-white":"text-[#3D3D3D]"}`}>Annually
                    </button>
                    <button 
                     onClick={() => setBiling("monthly")}
                    className={`cursor-pointer px-6 py-3.5 rounded-[50px] hover:border border-[#CCCCCC] hover:text-black ${biling === "monthly" ?"bg-black text-white hover:text-white":"text-[#3D3D3D]"}`}>Monthly</button>
                </div>
            </div>

            <div className="p-5 border-r border-r-[#CCCCCC]">
                <div className="space-y-3.5 pb-5 border-b border-b-[#CCCCCC]">
                    <h1 className="text-[40px] font-normal">Starter</h1>
                    <p className="text-[#3D3D3D] text-[14px] max-w-2/3">For individuals looking to automate their daily tasks</p>
                </div>
                <div className="mt-6 space-y-6.25">
                    <div className=" space-y-3">

                    {biling === "annually" ? (<h1 className="text-[28px]">$19 /mo</h1>):(<h1 className="text-[28px]">$29 /mo</h1>)}
                    <button className="border w-full border-[#CCC] bg-transparent px-4 py-2 rounded-sm hover:text-[#f9631e] cursor-pointer">Get started</button>
                    </div>
                    <div>

                    {starter.map((item, index) => {
                        return <ul className="flex flex-col gap-y-5"  key={index}>
                            <li className="flex gap-x-2 mt-5 text-[#3D3D3D] text-[14px] items-center"><p className="size-2.5 bg-[#919191] rounded-full"></p>{item}</li>
                        </ul>
                    })}
                    </div>
                </div>
            </div>
            
            <div className="p-5 border-r border-r-[#CCCCCC]">
                <div className="space-y-3.5 pb-5 border-b border-b-[#CCCCCC]">
                    <h1 className="text-[40px] font-normal">Pro</h1>
                    <p className="text-[#3D3D3D] text-[14px] max-w-2/3">For fast-moving teams ready to offload the busywork.</p>
                </div>
                <div className="mt-6 space-y-6.25">
                    <div className=" space-y-3">

                    {biling === "annually" ? (<h1 className="text-[28px]">$39 /mo</h1>):(<h1 className="text-[28px]">$49 /mo</h1>)}
                    
                    <button className='bg-[#FF5101] w-full px-4 py-2 rounded-sm flex justify-center items-center text-white hover:bg-[#f9631e] cursor-pointer'>Get started</button>
                    </div>
                    <div>

                    {pro.map((item, index) => {
                        return <ul className="flex flex-col gap-y-5"  key={index}>
                            <li className="flex gap-x-2 mt-5 text-[#3D3D3D] text-[14px] items-center"><p className="size-2.5 bg-[#f9631e] rounded-full"></p>{item}</li>
                        </ul>
                    })}
                    </div>
                </div>
            </div>

            <div className="p-5 border-r border-r-[#CCCCCC]">
                <div className="space-y-3.5 pb-5 border-b border-b-[#CCCCCC]">
                    <h1 className="text-[40px] font-normal">Enterprise</h1>
                    <p className="text-[#3D3D3D] text-[14px] max-w-2/3">For large teams and organizations that need scale and security.</p>
                </div>
                <div className="mt-6 space-y-6.25">
                    <div className=" space-y-3">

                    {biling === "annually" ? (<h1 className="text-[28px]">$99 /mo</h1>):(<h1 className="text-[28px]">$129 /mo</h1>)}
                    <button className="border w-full border-[#CCC] bg-transparent px-4 py-2 rounded-sm hover:text-[#f9631e] cursor-pointer">Get started</button>
                    </div>
                    <div>

                    {enterprise.map((item, index) => {
                        return <ul className="flex flex-col gap-y-5"  key={index}>
                            <li className="flex gap-x-2 mt-5 text-[#3D3D3D] text-[14px] items-center"><p className="size-2.5 bg-[#919191] rounded-full"></p>{item}</li>
                        </ul>
                    })}
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default Pricing