import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

        const arr = [...storedAppointments]
        setAppointments(arr);
        console.log(storedAppointments)
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Your Cart</h2>

            <ul className="cart-list">
                {appointments.length === 0 && <p className="text-center">Cart is empty</p>}

                {appointments.map((item, index) => (
                    <li key={index} className="cart-item">
                       <DoctorCard doctor={item}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appointments;
