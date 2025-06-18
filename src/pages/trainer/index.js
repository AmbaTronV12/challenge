import { useState } from "react";
import ""
import "../admin/admin.css";
import TrainerDashboard from "./dashboard/TrainerDashboard.js";
import TrainerUsers from "./users/TrainerUsers.js";

export default function Trainer() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="admin">
      <div className="sidebar">

        <div
          className={`sidebar-card ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          <img
            src={activePage === "dashboard" ? "/dashboard 1.png" : "/dashboard (1) 1.png"}
            alt="Dashboard"
          />
          <h2>Dashboard</h2>
        </div>

        <div
          className={`sidebar-card ${activePage === "users" ? "active" : ""}`}
          onClick={() => setActivePage("users")}
        >
          <img
            src={activePage === "users" ? "/user 2.png" : "/user (1) 1.png"}
            alt="Users"
          />
          <h2>Users</h2>
        </div>

      </div>

      <div className="admin-main">
        <header>
          <img src={logo2} alt="logo" className="admin-logo" />
          <div className="side-logo">
            <p>Admin</p>
            <img src="/user 2.png" alt="side" />
          </div>
        </header>

        {activePage === "dashboard" && <TrainerDashboard />}
        {activePage === "users" && <TrainerUsers />}
      </div>
    </div>
  );
}
