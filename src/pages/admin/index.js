import { useState } from "react";
import "./admin.css";
import AdminDashboard from "./dashboard/AdminDashboard.js";
import AdminUsers from "./users/AdminUsers.js";
import AdminTrainers from "./trainers/AdminTrainers.js";
import AdminOrders from "./orders/AdminOrders.js";
import { logo2 } from "../../asset/index";

export default function Admin() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="admin">
      <div className="sidebar">

        <div
          className={`sidebar-card ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          <img
            src={
              activePage === "dashboard"
                ? "/dashboard 1.png"      // aktif
                : "/dashboard (1) 1.png"  // non-aktif
            }
            alt="Dashboard"
          />
          <h2>Dashboard</h2>
        </div>

        <div
          className={`sidebar-card ${activePage === "users" ? "active" : ""}`}
          onClick={() => setActivePage("users")}
        >
          <img
            src={
              activePage === "users"
                ? "/user 2.png"
                : "/user (1) 1.png"
            }
            alt="Users"
          />
          <h2>Users</h2>
        </div>

        <div
          className={`sidebar-card ${activePage === "trainers" ? "active" : ""}`}
          onClick={() => setActivePage("trainers")}
        >
          <img
            src={
              activePage === "trainers"
                ? "/man 1.png"
                : "/image 16.png"
            }
            alt="Trainers"
          />
          <h2>Trainers</h2>
        </div>

        <div
          className={`sidebar-card ${activePage === "orders" ? "active" : ""}`}
          onClick={() => setActivePage("orders")}
        >
          <img
            src={
              activePage === "orders"
                ? "/clipboard 1.png"
                : "/image 17.png"
            }
            alt="Orders"
          />
          <h2>Orders</h2>
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

        {/* Komponen halaman berdasarkan activePage */}
        {activePage === "dashboard" && <AdminDashboard />}
        {activePage === "users" && <AdminUsers />}
        {activePage === "trainers" && <AdminTrainers />}
        {activePage === "orders" && <AdminOrders />}
      </div>
    </div>
  );
}
