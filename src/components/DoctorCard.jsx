import React from 'react'

const DoctorCard = ({doctor}) => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm border-0 overflow-hidden">
            <div className="row g-0">
              {/* Doctor Image */}
              <div className="col-md-4">
                <img
                  src={doctor.image}
                  className="img-fluid rounded-start h-100 w-100"
                  style={{ objectFit: 'cover' }}
                  alt={doctor.name}
                />
              </div>

              {/* Doctor Details */}
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold text-primary mb-3">
                    {doctor.name}
                  </h3>
                  
                  <p className="text-muted mb-2">
                    <span className="fw-semibold">Specialty:</span> {doctor.specialty}
                  </p>
                  
                  <p className="card-text mb-4">
                    {doctor.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-success fw-bold mb-0">
                      ${doctor.price}
                    </h4>
                   
                  </div>

                  <small className="text-muted d-block mt-3">
                    Doctor ID: {doctor.id}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard
