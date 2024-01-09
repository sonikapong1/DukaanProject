import {
  CaretDownOutlined,
  DownloadOutlined,
  InfoCircleOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Button, Card, Input, Table } from "antd";
import { ArrowDownUp } from "lucide-react";

const TransactionsTable = () => {

  const dataSource = [
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },
    { orderID: '#281209', orderDate: '7 July,2023', orderAmount: '₹1,278,23', transactionFees: '₹22' },


  ];

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderID',
      key: 'orderID',
      render: (text) => <p className="text-primary cursor-pointer" style={{ cursor: 'pointer' }}>{text}</p>,
    },
    { title: <span>Order date <CaretDownOutlined /></span>, dataIndex: 'orderDate', key: 'orderDate',
  width:500 },
    { title: 'Order Amount', dataIndex: 'orderAmount', key: 'orderAmount' },
    { title: <span className='d-flex justify-content-end'>Transaction fees <InfoCircleOutlined /></span>, dataIndex: 'transactionFees', key: 'transactionFees',
  render:(text)=><p className='d-flex justify-content-end'>{text}</p> },
  ];
  return (
    <div>
      <Card>
        <div className="mb-2 d-flex justify-content-between">
          <p className="w-25 "><Input search placeholder='Search features, tutorials, etc. ' prefix={<SearchOutlined />} /></p>
          <p className="d-flex">
            <Button  className="d-flex mr-4"> sort <ArrowDownUp width={15} style={{marginLeft:'3px'}}/></Button>
            <Button className="" ><DownloadOutlined /></Button>
          </p>
        </div>
        <Table dataSource={dataSource} columns={columns} pagination>
        </Table>
      </Card>
    </div>
  )
}
export default TransactionsTable