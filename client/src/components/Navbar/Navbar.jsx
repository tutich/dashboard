import {BellFilled, MailOutlined} from '@ant-design/icons';
import { Space, Badge } from "antd";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar({showSidebar, setShowSidebar}) {

    
    return (
        <div >
          <nav className='bg-slate-100  items-center px-4 py-6 flex justify-between overflow-hidden'>

               <div className='items-center '>
                   <span className=" text-white cursor-pointer " >
                    <FaBarsStaggered className=" bg-gray-900 px-2 rounded-md left-4" size={32} onClick={() => setShowSidebar(!showSidebar)}/>
                    </span>
               </div>
              <div>
                  <h2 className='align-center text-2xl font-bold text-[20px]'>Dashboard</h2>
              </div>
              <div className='items-center'>
                  <Space>
                    <Badge count={12} dot>
                        <MailOutlined className='text-[24px]' />
                    </Badge>
                    <Badge count={8}>
                        <BellFilled className='text-[24px]'/>
                    </Badge>
                  </Space>
              </div>
          </nav>
        </div>
    )
}

export default Navbar;