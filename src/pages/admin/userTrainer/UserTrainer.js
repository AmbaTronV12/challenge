import { useEffect, useState } from "react";
import "./UserTrainer.css";

export default function UserTrainer() {
  const [userTrainers, setUserTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTrainers = async () => {
    const res = await fetch("http://localhost:8000/api/user-trainers", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (res.ok) {
      setUserTrainers(data.userTrainers);
    } else {
      console.log("Failed Getting");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    await getTrainers();
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user-trainers">
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
              <th className="headerStyle">Trainer ID</th>
              <th className="headerStyle">Session ID</th>
              <th className="headerStyle">Session Left</th>
              <th className="headerStyle">Status</th>
            </tr>
          </thead>
          <tbody>
            {!loading ? (
              userTrainers.map((userTrainer, index) => (
                <tr key={userTrainer.id}>
                  <td className="cellStyle">{userTrainer.id}</td>
                  <td className="cellStyle">{userTrainer.customer_id}</td>
                  <td className="cellStyle">{userTrainer.trainer_id}</td>
                  <td className="cellStyle">{userTrainer.session_id}</td>
                  <td className="cellStyle">{userTrainer.session_left}</td>
                  <td className="cellStyle">{userTrainer.status}</td>
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
