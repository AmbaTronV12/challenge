import { useEffect, useState } from "react";
import "./AdminUsers.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const res = await fetch("http://localhost:8000/api/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setUsers(data.users);
    } else {
      console.log("Failed Getting");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await getUsers();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-users">
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
              <th className="headerStyle">No</th>
              <th className="headerStyle">ID</th>
              <th className="headerStyle">Username</th>
              <th className="headerStyle">Role</th>
              <th className="headerStyle">Action</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td className="cellStyle">{index + 1}</td>
                  <td className="cellStyle">{user.id}</td>
                  <td className="cellStyle">{user.full_name}</td>
                  <td className="cellStyle">{user.role}</td>
                  <td className="cellStyle">
                    <button className="action-btn edit">edit</button>
                    <button className="action-btn delete">delete</button>
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
