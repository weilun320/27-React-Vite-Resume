import React from 'react'

export default function Education(props) {
  const { schoolName, course, location, period } = props;

  return (
    <>
      <div className="bg-danger-subtle p-3 rounded-3 mb-4 shadow">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="fs-3 mb-1 text-decoration-underline">{schoolName}</p>
            <h4 className="fw-bold">{course}</h4>
          </div>
          <div className="col-auto">
            <p className="mb-1"><i className="me-1 text-secondary bi bi-geo-alt-fill"></i>{location}</p>
            <p className="mb-1"><i className="me-1 text-secondary bi bi-mortarboard-fill"></i>{period}</p>
          </div>
        </div>
      </div>
    </>
  );
}
