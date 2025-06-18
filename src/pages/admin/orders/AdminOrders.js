import { useEffect, useState } from "react";
import "./AdminOrders.css";
import { Link } from "react-router-dom";

export default function AdminOrders() {
  const [paymentLogs, setPaymentLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPaymentLogs = async () => {
    const res = await fetch("http://localhost:8000/api/payments", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setPaymentLogs(data.paymentLogs);
    } else {
      console.log("Failed Getting");
    }
  };

  const accPaymentMembership = async (customerId) => {
    const res = await fetch(`http://localhost:8000/api/users/${customerId}/admin-approve-membership`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if(res.ok){
        window.location.reload();
    }
  }

  const accPaymentPt = async (customerId) => {
    const res = await fetch(`http://localhost:8000/api/users/${customerId}/admin-approve-pt`, {
        method: 'post',
        headers: {
            // Authorization: `Bearer ${localStorage.getItem('token')}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if(res.ok){
        window.location.reload();
    }
  }

  const fetchData = async () => {
    setLoading(true);
    await getPaymentLogs();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-orders">
      <div className="table-wrapper">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th
                colSpan="6"
                style={{
                  textAlign: "left",
                  paddingLeft: "10px",
                  fontSize: "20px",
                }}
              >
                Users
              </th>
            </tr>
            <tr>
              <th className="headerStyle">Customer Id</th>
              <th className="headerStyle">Package Type</th>
              <th className="headerStyle">Package Id</th>
              <th className="headerStyle">Amount</th>
              <th className="headerStyle">Method</th>
              <th className="headerStyle">Proof Image</th>
              <th className="headerStyle">Status</th>
              <th className="headerStyle">Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              paymentLogs.map((payment) => (
                <tr key={payment.id}>
                  <td className="cellStyle">{payment.customer_id}</td>
                  <td className="cellStyle">{payment.package_type}</td>
                  <td className="cellStyle">{payment.package_type_id}</td>
                  <td className="cellStyle">{payment.amount}</td>
                  <td className="cellStyle">{payment.method}</td>
                  <td className="cellStyle">
                    <Link to={`/admin/payment/${payment.id}`}>See Image</Link>
                  </td>
                  <td className="cellStyle">{payment.status}</td>
                  <td className="cellStyle">
                    {payment.status === 'pending' && (
                        <>
                            {
                                payment.package_type === 'membership' ? (
                                    <button className="action-btn edit" onClick={() => accPaymentMembership(payment.customer_id)}>Accept</button>
                                ) : (
                                    <button className="action-btn edit" onClick={() => accPaymentPt(payment.customer_id)}>Accept</button>
                                )
                            }
                            <button className="action-btn delete">Cancel</button>
                        </>
                    )}
                    <button className="action-btn delete">See Detail</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <h1>Loading bosqueee</h1>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
