import "./userstrainer.css"

export default function TrainerUsers(){
    return(
        <div className="trainer-users">
            <div className="table-wrapper">
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr>
                        <th colSpan="6" style={{ 
                            textAlign: 'left', 
                            paddingLeft: '10px', 
                            fontSize: '20px' 
                        }}>
                            Users
                        </th>
                        </tr>
                        <tr>
                        <th className="headerStyle">No</th>
                        <th className="headerStyle">ID</th>
                        <th className="headerStyle">Username</th>
                        <th className="headerStyle">Type of member</th>
                        <th className="headerStyle">Role</th>
                        <th className="headerStyle">Member date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="cellStyle">Data 1</td>
                        <td className="cellStyle">Data 2</td>
                        <td className="cellStyle">Data 3</td>
                        <td className="cellStyle">Data 4</td>
                        <td className="cellStyle">Data 5</td>
                        <td className="cellStyle">Data 6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}