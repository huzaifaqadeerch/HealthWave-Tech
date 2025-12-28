import { doctors } from "../data/Doctors"
import { Link } from "react-router-dom"

const FindDoctor = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Consult Specialists</h2>
      <div className="row">
        {
          doctors.map((docter) => (
            <div key={docter.id} className="col-md-4 col-sm-6 mb-4">
              <div className="doctor-card">
                <img src={docter.image} className="doctor-img" />
                <h4>{docter.specialty}</h4>
                <Link to={`/doctor/${docter.id}`} className="card-btn">View Details</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FindDoctor;
