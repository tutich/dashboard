import {BellFilled, MailOutlined} from '@ant-design/icons';
import { Space, Badge } from "antd";

function Navbar() {
    return (
        <div>
          <nav className='p-5 max-w-7xl mx-auto flex items-center justify-between xl:px-0'>
              <h2>Dashboard</h2>
              <Space>
                <Badge count={12}>
                    <MailOutlined className='text-[24px]' />
                </Badge>
                <Badge>
                    <BellFilled className='text-[24px]'/>
                </Badge>
              </Space>
          </nav>
        </div>
    )
}

export default Navbar;