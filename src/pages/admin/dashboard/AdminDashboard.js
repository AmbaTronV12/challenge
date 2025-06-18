import imageEmail from "../../../asset/email.svg";
import "./dashboard.css";
import { users, traineradmin, membercard, lifting } from "../../../asset";

export default function AdminDashboard(){
    return(
        <div className="admin-dashboard">
            <h2>Dashboard</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div className="card-wrapper">
                    <div className="card" style={{  backgroundColor:'#006CE8'}}>
                        <img src={users} alt="imagecard"/>
                        <div className="cardText">
                            <p>Users</p>
                            <p>99</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#FF3F33'}}>
                        <img src={traineradmin} alt="imagecard" />
                        <div className="cardText">
                            <p>Trainer</p>
                            <p>10</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#4DDACA'}}>
                        <img src={membercard} />
                        <div className="cardText">
                            <p>Membership</p>
                            <p>35</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#FF6F00'}}>
                        <img src={lifting} />
                        <div className="cardText">
                            <p>Session Package</p>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}