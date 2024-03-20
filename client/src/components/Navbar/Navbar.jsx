import {BellFilled, MailOutlined} from '@ant-design/icons';
import { Space, Badge } from "antd";

function Navbar() {
    return (
        <div>
          <nav className='bg-slate-100 px-4 py-3 flex justify-between'>
              <div>
                  <h2>Dashboard</h2>
              </div>
              <div>
                  <Space>
                    <Badge count={12}>
                        <MailOutlined className='text-[24px]' />
                    </Badge>
                    <Badge>
                        <BellFilled className='text-[24px]'/>
                    </Badge>
                  </Space>
              </div>
          </nav>
        </div>
    )
}

export default Navbar;