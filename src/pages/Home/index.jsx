import { NavLink } from 'react-router-dom';

export default function Dashboard() {
    return (
        <>  
            <h1>Home</h1>
            <button><NavLink to="/managerequests">Manage Requests</NavLink></button>
            <button><NavLink to="/manageequipment">Manage Equipment</NavLink></button>
            <button><NavLink to="/login">Sign Out</NavLink></button>
        </>
    )
}