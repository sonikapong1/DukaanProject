import {
  QuestionCircleOutlined,
  SearchOutlined,
  MessageOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import { Input } from 'antd';

const NavBar = () => {

  return (
    <div className=" w-full p-3 shadow-sm mb-5 bg-white rounded d-flex flex-wrap justify-content-between"  >
      <div className=' d-flex w-25 flex-wrap'>
        <p className="w-25">Payments</p>
        <p className="w-50 ml-3 d-flex justify-between"><QuestionCircleOutlined className='mr-2' />How it works</p>
      </div>
      <div className='text-primary w-25 '>
        <Input search placeholder='Search features, tutorials, etc. ' prefix={<SearchOutlined />} />
      </div>
      <div className='w-25 d-flex justify-content-end '>
        <p className='mr-3 custom-light-gray d-flex align-items-center justify-content-center rounded-circle' style={{ width: '30px', height: '30px' }}>
          <MessageOutlined />
        </p>
        <p className='mr-3 custom-light-gray d-flex align-items-center justify-content-center rounded-circle' style={{ width: '30px', height: '30px' }}><CaretDownOutlined /></p>
      </div>
    </div>
  );
};

export default NavBar;
