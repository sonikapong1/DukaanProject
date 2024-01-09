import { Select } from "antd"
import NavBar from "./NavBar"
import InfoWidget from "../../custom/InfoWidget"
import TransactionsTable from "../../tables/TransactionsTable"

const PaymentDashboard = () => {
  return (
    <div style={{ overflowY: 'auto' }} className="flex flex-col w-100 bg-light">
      <NavBar />
      <div className=" d-flex justify-content-between p-3">
        <p className="h6">Overview</p>
        <p className="" style={{ width: '13%' }}><Select options={[]} className="w-75" placeholder={"Last Month"} /></p>
      </div>
      <div className="w-100 d-flex p-3 flex-wrap" style={{ gap: '2rem' }}>
        <InfoWidget header={"Online Orders"} body={"231"} />
        <p><InfoWidget header={"Amount received"} body={"₹23,92,312.19"} /></p>
      </div>
      <div className="p-3">
        <p className="h6">Transactions | This Month</p>
        <TransactionsTable />
      </div>
    </div>
  )
}
export default PaymentDashboard