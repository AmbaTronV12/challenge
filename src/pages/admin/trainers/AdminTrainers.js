import "./AdminTrainers.css";

export default function AdminTrainers() {
  const trainers = [
    { id: 1, name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg", session: "Online" },
    { id: 2, name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg", session: "Busy" },
    { id: 3, name: "Mike Johnson", image: "https://randomuser.me/api/portraits/men/3.jpg", session: "Offline" },
    { id: 4, name: "Emily Davis", image: "https://randomuser.me/api/portraits/women/4.jpg", session: "Online" },
    { id: 5, name: "David Wilson", image: "https://randomuser.me/api/portraits/men/5.jpg", session: "Busy" },
    { id: 6, name: "Sarah Brown", image: "https://randomuser.me/api/portraits/women/6.jpg", session: "Online" },
    { id: 7, name: "Chris Lee", image: "https://randomuser.me/api/portraits/men/7.jpg", session: "Offline" },
    { id: 8, name: "Olivia Taylor", image: "https://randomuser.me/api/portraits/women/8.jpg", session: "Online" },
    { id: 9, name: "Daniel Martinez", image: "https://randomuser.me/api/portraits/men/9.jpg", session: "Busy" },
    { id: 10, name: "Sophia Anderson", image: "https://randomuser.me/api/portraits/women/10.jpg", session: "Online" }
  ];

  return (
    <div className="admin-trainers">
      <div className="trainers-wrapper">
        <div className="trainers-header">
          <h2>Trainers</h2>
          <div>
            <div>SEARCH BAR</div>
          </div>
        </div>
        <div className="trainers-main">
          {trainers.map((trainer) => (
            <div className="card" key={trainer.id}>
              <img src={trainer.image} alt={trainer.name} />
              <h3>{trainer.name}</h3>
              <p className={`session ${trainer.session.toLowerCase()}`}>
                {trainer.session}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
