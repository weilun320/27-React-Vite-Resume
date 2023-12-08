import React from 'react'

export default function Experience(props) {
  const { companyName, position, location, period, descriptions } = props;

  return (
    <>
      <div className="bg-warning-subtle p-3 rounded-3 mb-4 shadow">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="fs-3 mb-1 text-decoration-underline">{companyName}</p>
            <h4 className="fw-bold">{position}</h4>
          </div>
          <div className="col-auto">
            <p className="mb-1"><i className="me-1 text-secondary bi bi-geo-alt-fill"></i>{location}</p>
            <p className="mb-1"><i className="me-1 text-secondary bi bi-person-workspace"></i>{period}</p>
          </div>
        </div>
        <ul>
          {descriptions.map(description => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
