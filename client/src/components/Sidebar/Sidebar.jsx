import { useState } from 'react';
import { HiX } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        console.log('hello')
      };
    return (
        <aside>
            <div className="bg-blue-600 ">
               <span className="absolute mx-4 text-white text-4xl top-5 left-4 cursor-pointer "onClick={toggleSidebar} >
                <FaBarsStaggered className=" bg-gray-900 px-2 rounded-md" size={32}/>
                </span>
             <section className={`sidebar fixed top-0 bottom-0 left-${ showSidebar ? '0px' : '-300px' } left-[-300px] lg:left-0  p-2 w-[300px] overflow-y-auto text-center
                bg-gray-900 mx-4 transition-all duration-300 ease-in-out`}>
                
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <h1 className="text-gray-200 ml-6 font-bold text-[20px]">TWO 
                        <span className="text-red-500 text-[20px]">tich</span></h1>
                        <HiX className=" ml-32 cursor-pointer text-gray-200 lg:hidden" size={28} onClick={toggleSidebar}/>
                    </div>
                    <hr className="my-2 text-gray-600"/>
                </div>

                <div className="p-2.5 mt-5 flex items-center rounded-md px-4 duration-300
                cursor-pointer bg-gray-700 text-white">
                    <input type="text" placeholder="search" className="text-[15px] bg-transparent
                     ml-4 w-full focus:outline-none"/>
                    
                </div>
                
              </section>
            </div>
        </aside>
    )
}

export default Sidebar;