import imageEmail from "../../../asset/email.svg";
import "./dashboard.css";
import { users, traineradmin, membercard, lifting } from "../../../asset";
import { useEffect, useState } from "react";

export default function AdminDashboard(){
    const [user, setUser] = useState(0)
    const [trainer, setTrainer] = useState(0)
    const [membership, setMembership] = useState(0)
    const [session, setSession] = useState(0)

    const getUser = async () => {
        const res = await fetch('http://localhost:8000/api/users', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const data = await res.json();
        if(res.ok){
            setUser(data.users.length)
        } else {
            console.log('Failed Getting');
        }
    }
    
    const getTrainer = async () => {
        const res = await fetch('http://localhost:8000/api/trainers', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const data = await res.json();
        if(res.ok){
            setTrainer(data.trainers.length)
        } else {
            console.log('Failed Getting');
        }
    }
    const getMembership = async () => {
        const res = await fetch('http://localhost:8000/api/memberships', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const data = await res.json();
        if(res.ok){
            setMembership(data.memberships.length)
        } else {
            console.log('Failed Getting');
        }
    }
    const getSession = async () => {
        const res = await fetch('http://localhost:8000/api/sessions', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const data = await res.json();
        if(res.ok){
            setSession(data.sessions.length)
        } else {
            console.log('Failed Getting');
        }
    }

    const fetchData = async () => {
        await Promise.all([getUser(), getTrainer(), getMembership(), getSession()])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="admin-dashboard">
            <h2>Dashboard</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div className="card-wrapper">
                    <div className="card" style={{  backgroundColor:'#006CE8'}}>
                        <img src={users} alt="imagecard"/>
                        <div className="cardText">
                            <p>Users</p>
                            <p>{user}</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#FF3F33'}}>
                        <img src={traineradmin} alt="imagecard" />
                        <div className="cardText">
                            <p>Trainer</p>
                            <p>{trainer}</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#4DDACA'}}>
                        <img src={membercard} />
                        <div className="cardText">
                            <p>Membership</p>
                            <p>{membership}</p>
                        </div>
                    </div>

                    <div className="card" style={{  backgroundColor:'#FF6F00'}}>
                        <img src={lifting} />
                        <div className="cardText">
                            <p>Session Package</p>
                            <p>{session}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}