import { useParams } from "react-router-dom";
import { doctors } from "../data/Doctors";
import { useState, useEffect } from "react";

const DoctorDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [docter, setDocter] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    const docT = (doctors.filter((doc) => {
      return doc.id === parseInt(id)
    }))
    setDocter(docT[0])
    setIsLoading(false);
  }, [])

  const handleAppointment = (e) => {
    e.preventDefault();
    const storedCart = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...storedCart, docter]))
    alert("Appointment added");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {isLoading ? <h1>Loading....</h1> : (
          <>
            <div className="col-md-5">
              <img src={docter.image} className="details-img" />
            </div>

            <div className="col-md-7">
              <h2>{docter.name}</h2>
              <h4 className="light-text">{docter.specialty}</h4>
              <p>{docter.description}</p>
              <h3 className="price">Consultation: $ {docter.price}</h3>

              <button onClick={handleAppointment} className="add-cart-btn">Appointment</button>
            </div>
          </>
        )
        }

      </div>
    </div>
  );
};

export default DoctorDetails;