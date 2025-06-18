import imageEmail from "../../../asset/email.svg";
import "./dashboard.css";

export default function AdminDashboard(){
    return(
        <div className="admin-dashboard">
            <h2>Dashboard</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div className="card-wrapper">
                    <div className="card" style={{  backgroundColor:'blue'}}>
                        <img src={imageEmail} alt="imagecard"/>
                        <div className="cardText">
                            <h3>Users</h3>
                            <h3>00</h3>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imageEmail} alt="imagecard"/>
                        <div className="cardText">
                            <h3>Users</h3>
                            <h3>00</h3>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imageEmail} />
                        <div className="cardText">
                            <h3>Users</h3>
                            <h3>00</h3>
                        </div>
                    </div>

                    <div className="card">
                        <img src={imageEmail} />
                        <div className="cardText">
                            <h3>Users</h3>
                            <h3>00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}