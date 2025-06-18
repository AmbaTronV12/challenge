import { useEffect, useState } from "react";
import "./membership.css";

export default function UserMembership() {
  const [userMemberships, setUserMemberships] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserMemberships = async () => {
    const res = await fetch("http://localhost:8000/api/user-memberships", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setUserMemberships(data.userMemberships);
    } else {
      console.log("Failed Getting");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await getUserMemberships();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user-memberships">
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
              <th className="headerStyle">ID</th>
              <th className="headerStyle">Customer ID</th>
              <th className="headerStyle">Membership ID</th>
              <th className="headerStyle">Start Date</th>
              <th className="headerStyle">End Date</th>
              <th className="headerStyle">Status</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              userMemberships.map((userMembership) => (
                <tr key={userMembership.id}>
                  <td className="cellStyle">{userMembership.id}</td>
                  <td className="cellStyle">{userMembership.customer_id}</td>
                  <td className="cellStyle">{userMembership.membership_id}</td>
                  <td className="cellStyle">{userMembership.start_date}</td>
                  <td className="cellStyle">{userMembership.end_date}</td>
                  <td className="cellStyle">{userMembership.status}</td>
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
