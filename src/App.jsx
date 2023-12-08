import Experience from "./Experience";
import Education from "./Education";

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
      <div className="row">
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
  const experience1 = {
    companyName: "Resume Worded",
    position: "Software Engineer",
    location: "New York, NY",
    period: "2020 - Present",
    descriptions: [
      "Created an invoicing system for subscription services that managed monthly invoices and printed invoices to be sent to customers; increased conversion rate by 15%",
      "Collaborated with internal teams, including graphic design and QA testers to develop and launch a new application in just 6 months, ahead of schedule by 6 months.",
      "Wrote reusable unit test documents to ensure quality control and detect bugs by increasing over 35% effieciency rate."
    ]
  };

  const experience2 = {
    companyName: "Growthsi",
    position: "Software Engineer",
    location: "San Diego, CA",
    period: "2016 - 2020",
    descriptions: [
      "Analyzed information to determine, recommend and plan redesign of a new API; presented outputs to CTO.",
      "Analyzed user needs and software requirements to determine feasibility of design, ensuring project completion 3 weeks prior to targeted due date.",
      "Released and updated 15+ custom .net appications for company clients in health niches.",
      "Wrote Python and JavaScript libraries to display real time pricing via SkyScanner's flights pricing API, leading to increased customer satisfaction."
    ]
  };

  const experience3 = {
    companyName: "Rofocus",
    position: "Front-end Developer",
    location: "New York, NY",
    period: "2012 - 2016",
    descriptions: [
      "Implemented a new responsive website approach increasing mobile traffic by 22%.",
      "Partnered with back-end developers and created dynamic web pages using JavaScript, resulting in website leads increase by 15%",
      "Collaborated on APIs and managed software workflow using Scrum methodology, increasing task success rate by 25%"
    ]
  };

  const education1 = {
    schoolName: "San Jose State University",
    course: "Master of Computer Science",
    location: "San Jose, CA",
    period: "2012"
  };

  const education2 = {
    schoolName: "Steven Institute of Technology",
    course: "Bachelor of Computer Science",
    location: "Hoboken, NJ",
    period: "2008"
  };

  return (
    <>
      <div className="m-3 m-md-5">
        <div className="p-3 bg-dark">
          <div className="p-3 p-lg-5 bg-dark-subtle">
            <Header />
            <div className="mt-5">
              <h2 className="fw-bold">Experience</h2>
              <Experience {...experience1} />
              <Experience {...experience2} />
              <Experience {...experience3} />
            </div>
            <div className="mt-5">
              <h2 className="fw-bold">Education</h2>
              <Education {...education1} />
              <Education {...education2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
