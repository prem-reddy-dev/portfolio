import React from "react";
import mosaicLogo from "./assets/01-mosaic-logo.png";
import kemperLogo from "./assets/02-kemper-logo.png";
import refinitivLogo from "./assets/03-refinitiv-logo.jpeg";
import cvsLogo from "./assets/04-cvs-logo.png";
import askmeguruLogo from "./assets/05-askmeguru-logo.jpeg";

export default function About() {
  return (
    <main style={{ maxWidth: "900px", margin: "2rem auto", fontFamily: "Arial, sans-serif", color: "#111827", padding: "0 1rem" }}>
      {/* Contact Information */}
      <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        <div>
          <p>Email: <a href="mailto:premreddy2405@gmail.com">premreddy2405@gmail.com</a></p>
          <p>Phone: <a href="tel:+12162605404">+1 (216) 260-5404</a></p>
          <p>Location: Omaha, Nebraska (Open to Remote & Onsite)</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <a href="https://www.linkedin.com/in/prem-reddy-kolan-326a17269" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://github.com/prem-reddy-dev/README.md" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
          <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </section>

      {/* Professional Summary */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>Professional Summary</h2>
        <p>
          Results-driven Full Stack .NET Developer with 8+ years of experience in scalable web application development. Proficient in building secure, cloud-based solutions using C#, ASP.NET Core, React, Azure, and SQL Server. Proven ability to optimize architecture, enforce compliance, and lead delivery across healthcare, insurance, and finance domains.
        </p>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>Technical Skills</h2>
        <ul>
          <li><strong>Languages:</strong> C#, SQL, JavaScript, TypeScript, T-SQL</li>
          <li><strong>Frameworks:</strong> ASP.NET Core, MVC, Razor, Entity Framework, React, Angular</li>
          <li><strong>Cloud & Microservices:</strong> Azure (Functions, ADF, Cosmos DB, DevOps), Docker, Kubernetes</li>
          <li><strong>Databases:</strong> SQL Server, PostgreSQL, Cosmos DB, MongoDB</li>
          <li><strong>DevOps & Tools:</strong> Git, Azure DevOps, TFS, Swagger, Postman</li>
          <li><strong>Frontend:</strong> HTML5, CSS3, Bootstrap, Responsive UI</li>
          <li><strong>Testing & Security:</strong> xUnit, NUnit, SonarQube, OAuth, JWT</li>
          <li><strong>Methodologies:</strong> Agile, Scrum, CI/CD, TDD</li>
        </ul>
      </section>

      {/* Certifications */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>Certifications</h2>
        <ul>
          <li>Microsoft Azure Administrator Associate (AZ-104)</li>
        </ul>
      </section>

      {/* Education */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>Education</h2>
        <ul>
          <li><strong>Master of Science in Computer Science</strong> – Lewis University, IL – May 2023</li>
          <li><strong>Bachelor of Technology in Computer Science</strong> – Sri Indu College of Engineering, Hyderabad – 2017</li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 style={{ borderBottom: "2px solid #3b82f6", paddingBottom: "0.5rem" }}>Featured Projects</h2>

        {[{
          logo: mosaicLogo,
          title: "Mosaic – Autism Service Platform",
          role: "Full Stack .NET Developer",
          duration: "Apr 2024 – Present",
          location: "Omaha, Nebraska",
          tech: "ASP.NET Core, Azure, SQL Server, React",
          bullets: [
            "Built HIPAA-compliant cloud-native platform using Azure and ASP.NET Core.",
            "Developed secure provider-patient matching system with encrypted access layers.",
            "Created reusable UI components with React and integrated Azure authentication.",
            "Managed CI/CD pipeline via Azure DevOps with infrastructure as code."
          ]
        }, {
          logo: kemperLogo,
          title: "Kemper Insurance – Claims Modernization",
          role: ".NET Developer",
          duration: "Feb 2022 – Apr 2024",
          location: "Chicago, Illinois",
          tech: "Azure DevOps, .NET Core, SQL Server, React, Angular",
          bullets: [
            "Transformed monolithic claim system into microservice architecture.",
            "Streamlined deployment using Azure Pipelines and containerization.",
            "Enhanced claims dashboard with React and dynamic routing via Angular.",
            "Developed REST APIs for claim processing and policy validations."
          ]
        }, {
          logo: refinitivLogo,
          title: "Refinitiv – Financial Data Platform",
          role: ".NET Developer",
          duration: "Mar 2020 – Jul 2021",
          location: "New York City, New York",
          tech: "ASP.NET MVC, AngularJS, SQL Server",
          bullets: [
            "Built real-time trading dashboards with live stock API integrations.",
            "Improved API throughput by 40% using async patterns and SQL tuning.",
            "Designed modular services for data aggregation and reporting.",
            "Collaborated with UI team on AngularJS visualizations and analytics."
          ]
        }, {
          logo: cvsLogo,
          title: "CVS Pharmacy – Retail Healthcare Apps",
          role: ".NET Developer",
          duration: "Sep 2018 – Mar 2020",
          location: "Lowell, Massachusetts",
          tech: ".NET, SQL Server, HIPAA Compliance",
          bullets: [
            "Engineered HIPAA-compliant modules for prescription handling and logs.",
            "Boosted pharmacy app performance by optimizing backend workflows.",
            "Automated ETL for patient data synchronization with hospital systems.",
            "Implemented secured audit trails and RBAC for sensitive modules."
          ]
        }, {
          logo: askmeguruLogo,
          title: "AskMeGuru Technologies – EdTech SaaS",
          role: ".NET Developer",
          duration: "Jun 2016 – Aug 2018",
          location: "Hyderabad, Telangana, India",
          tech: ".NET Web API, Angular, SQL Server",
          bullets: [
            "Created scalable LMS for 10,000+ users with dynamic scheduling.",
            "Built multi-role admin panel with Angular and Web API integration.",
            "Developed performance-driven SQL routines and pagination APIs.",
            "Enabled real-time progress tracking and instructor analytics."
          ]
        }].map((proj, i) => (
          <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <img src={proj.logo} alt={`${proj.title} Logo`} style={{ height: "50px" }} />
            <div>
              <h3>{proj.title}</h3>
              <p><strong>Role:</strong> {proj.role}</p>
              <p><strong>Duration:</strong> {proj.duration}</p>
              <p><strong>Location:</strong> {proj.location}</p>
              <ul>{proj.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              <p><strong>Tech:</strong> {proj.tech}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}






























