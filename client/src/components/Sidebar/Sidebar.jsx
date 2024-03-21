
import { HiX } from "react-icons/hi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbFileReport } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

function Sidebar({showSidebar}) {
   
    return (
        <aside>
            <div className="bg-gray-600 h-full fixed">
             <section className={`sidebar fixed top-0 bottom-0  left-[-300px] ${showSidebar ? 'hidden' : "block"} lg:left-0  p-2 w-[300px] overflow-y-auto text-center
                bg-gray-900  transition-all duration-300 ease-in-out `}>
                
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <h1 className="text-gray-200 ml-6 font-bold text-[20px]">TWO 
                        <span className="text-red-500 text-[20px]">tich</span></h1>
                        <HiX className=" ml-32 cursor-pointer text-gray-200 lg:hidden" size={28}  />
                    </div>
                    <hr className="my-2 text-gray-600"/>
                </div>

                <div className="p-2.5 mt-5 flex items-center rounded-md px-4 duration-300
                cursor-pointer bg-gray-700 text-white">
                    <input type="text" placeholder="search" className="text-[15px] bg-transparent
                     ml-4 w-full focus:outline-none"/>
                    
                </div>
                <div className="p-2.5 mt-5 flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                   <MdOutlineDashboardCustomize size={32} />
                   <h1 className='p-3 text-2xl'>Dashboard</h1>
                </div>
                <div className="p-2.5  flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                   <IoPersonSharp size={32} />
                   <h1 className='p-3 text-2xl'>Customers</h1>
                </div>
                <div className="p-2.5  flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                  <MdOutlineBorderColor size={32} />
                  <h1 className='p-3 text-2xl'>Orders</h1>
                </div>
                <div className="p-2.5  flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                  <MdOutlineProductionQuantityLimits size={32} />
                  <h1 className='p-3 text-2xl'>Products</h1>
                </div>
                <div className="p-2.5  flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                  <TbFileReport size={32} />
                  <h1 className='p-3 text-2xl'>Reports</h1>
                </div>
                <div className="p-2.5  flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                  <LuSettings size={32} />
                  <h1 className='p-3 text-2xl'>Settings</h1>
                </div>
                <div className="p-2.5 mt-10 flex items-center rounded-md px-4 duration-300
                cursor-pointer  text-white hover:shadow  ">
                   <TbLogout2 size={32} />
                   <h1 className='p-3 text-2xl'>Log out</h1>
                </div>
                
              </section>
            </div>
        </aside>
    )
}

export default Sidebar;