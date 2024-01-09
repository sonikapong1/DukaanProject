import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CarOutlined,
  DollarOutlined,
  HomeOutlined,
  MailOutlined,
  SoundOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';

import { Banknote, LucidePalette } from 'lucide-react';
import { useState } from 'react';
import PaymentDashboard from '../pages/Payments/PaymentDashboard';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Sonika', 'sub1', <MailOutlined />, [
    getItem('Home', '1', < HomeOutlined />,),
    getItem('Orders', '2', <CalendarOutlined />),
    getItem('Products', '3', <AppstoreOutlined />),
    getItem('Delivery', '4', <CarOutlined />),
    getItem('Marketing', '5', <SoundOutlined />),
    getItem('Analytics', '6', <BarChartOutlined />),
    getItem('Payments', '7', <Banknote style={{ fill: 'white', color: 'black' }} />),
    getItem('Tools', '8', <ToolOutlined />),
    getItem('Discounts', '9', <DollarOutlined />),
    getItem('Audience', '10', <TeamOutlined />),
    getItem('Appearance', '11', <LucidePalette />),
    getItem('Plugins', '12', <ThunderboltOutlined />),
  ]),

  // getItem(
  //   (
  //     <div className='d-flex border bg-secondary rounded-md'>
  //       <div className='w-50 d-flex justify-content-center'>
  //         <WalletOutlined />
  //       </div>
  //       <p className='w-75'>
  //         Available Credits
  //       </p>
  //     </div>
  //   ),
  //   'sub4',
  //   ''
  // )
];
const CustomMenu = () => {
  const [current, setCurrent] = useState('1');
  const [selectedKey, setSelectedKey] = useState('1');
  const onClick = (e) => {
    console.log()
    setCurrent(e.key);
    setSelectedKey(e.key);
  };
  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Menu
          onClick={onClick}
          className='ant-menu-item-selected'
          style={{
            width: 256,
            height:'100%',
            backgroundColor: "#000C17",
            position: 'relative',
            itemSelectedStyle: { background: 'white ' },
            
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme='dark'
          items={items}
          selectedKeys={[selectedKey]} 
          
        />
        {current === "7" ? <PaymentDashboard /> : null}

      </div>
      <div style={{ position: 'absolute', marginTop: '-70px', color: 'white', marginLeft: '10px', width: '12%' }} className='d-flex flex-wrap'>
        <div className='d-flex p-1 custom-med-gray rounded-md' style={{ borderRadius: '5px', boxShadow: 'inset 0 0 5px #343131', width: '100%' }} >
          <div className='w-25 d-flex justify-content-center custom-med-gray' style={{ borderRadius: '5px', boxShadow: 'inset 0 0 2px #343131' }}>
            <WalletOutlined style={{ fontSize: '20px', justifyContent: 'center', borderRadius: '5px' }} />
          </div>
          <div className='w-100'>
            <p className='w-full fs-2 ml-3'>Available Credits</p>
            <p className='ml-3'>222.10</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomMenu;