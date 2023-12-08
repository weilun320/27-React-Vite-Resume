
function Header() {
  return (
    <>
      <div className="bg-primary-subtle shadow row align-items-center mb-5 gx-0 p-3 rounded-3">
        <div className="col-md-7 col-lg-8 col-xl-9">
          <Introduction />
        </div>
        <div className="col-md-5 col-lg-4 col-xl-3 mt-4 mt-md-0">
          <Contact />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6">
          <Skills />
        </div>
        <div className="col-md-6 mt-3 mt-md-0">
          <PersonalSkills />
        </div>
      </div>
    </>
  );
}

function Introduction() {
  return (
    <>
      <h1 className="fw-bold">Chris Ware</h1>
      <h2>Software Engineer</h2>
    </>
  );
}

function Contact() {
  return (
    <>
      <p className="mb-1"><i className="me-1 text-secondary bi bi-geo-alt-fill"></i>Bay Area, California</p>
      <p className="mb-1"><i className="me-1 text-secondary bi bi-telephone-fill"></i>+1-234-567-890</p>
      <p className="mb-1"><i className="me-1 text-secondary bi bi-envelope-fill"></i>chrisware@gmail.com</p>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className="p-3 border bg-light shadow h-100 rounded-3">
        <h4 className="text-decoration-underline">Technical Skills</h4>
        <ul className="row">
          <li className="col-lg-6">CSS</li>
          <li className="col-lg-6">JavaScript</li>
          <li className="col-lg-6">Python</li>
          <li className="col-lg-6">Advanced SAP</li>
          <li className="col-lg-6">HTML and XML</li>
          <li className="col-lg-6">Scrum Methodology</li>
          <li className="col-lg-6">SQL</li>
        </ul>
      </div>
    </>
  );
}

function PersonalSkills() {
  return (
    <>
      <div className="p-3 border bg-light shadow h-100 rounded-3">
        <h4 className="text-decoration-underline">Personal Skills</h4>
        <ul className="row">
          <li className="col-lg-6">Problem Solving</li>
          <li className="col-lg-6">Team Leader</li>
          <li className="col-lg-6">Planning Strategically</li>
          <li className="col-lg-6">Excellent Organisational Skills</li>
          <li className="col-lg-6">Attention to Detail</li>
        </ul>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="m-3 m-md-5">
        <div className="p-3 bg-dark">
          <div className="p-3 p-lg-5 bg-dark-subtle">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
