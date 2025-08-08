import React from "react";

const experiences = [
  {
    company: "Bank of America",
    duration: "Sep 2024 to Present",
    role: "Software Engineer II",
    description: `
      Currently leading the migration of legacy financial reporting modules to a modern cloud-native microservices architecture using Spring Boot and AWS Lambda, improving scalability and reducing infrastructure costs. Develop secure REST APIs with OAuth 2.0 authentication to ensure compliance with financial regulations and data protection standards. Automate CI/CD pipelines using Jenkins and Docker to accelerate deployments and enhance release reliability. Implement real-time alerting and monitoring with CloudWatch and custom metrics to improve incident response during critical transaction periods. Collaborate with cross-functional teams to deliver a React and GraphQL-based fraud detection dashboard, enabling faster response to suspicious activities.
    `
  },
  {
    company: "TCS",
    duration: "Feb 2021 to Jan 2023",
    role: "Software Engineer",
    description: `
      Developed scalable Spring Boot microservices with RESTful APIs for a cloud-based EHR platform, enabling patient onboarding, appointment management, and lab workflows. Built role-based React.js dashboards with Redux and Axios to streamline clinical operations. Integrated HL7/FHIR APIs for secure health data exchange in compliance with HIPAA standards. Optimized SQL joins and MongoDB aggregations to enhance reporting performance. Secured services with OAuth 2.0, Spring Security, and JWT-based RBAC for robust data protection. Implemented CI/CD pipelines using Jenkins and Docker with rollback support to improve deployment reliability. Delivered real-time lab result tracking and appointment reminder features using Kafka, and created JUnit/Mockito test suites with over 90% coverage to ensure reliability across critical healthcare modules.
    `
  },
  {
    company: "IBM Technologies",
    duration: "Jan 2019 to Feb 2021",
    role: "Associate Software Engineer",
    description: `
      Developed scalable backend microservices using Spring Boot, Spring MVC, and Spring Data JPA to manage the end-to-end order lifecycle, processing over one million transactions per month. Built REST APIs for real-time client-server communication and secured endpoints with Spring Security and JWT for role-based access. Integrated IBM MQ for asynchronous communication, optimized PostgreSQL queries, and implemented custom JPA repositories to improve performance and reporting efficiency. Defined API contracts and tested endpoints using Swagger UI for consistent development. Created unit and integration tests with Mockito and JUnit5 to ensure reliability and reduce production bugs. Deployed microservices in Docker containers and managed production releases on Red Hat OpenShift via CI/CD pipelines with Jenkins and GitHub Actions, achieving weekly zero-downtime deployments. Collaborated in Agile teams, contributing to sprint planning, daily stand-ups, and retrospectives.    `
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-red-500 text-center mb-12 tracking-wider">
          EXPERIENCE
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 border-b border-gray-200 pb-8 md:flex md:items-start md:justify-between md:gap-8"
          >
            {/* LEFT: Company & Duration */}
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold text-gray-800">
                {exp.company}
              </h3>
              <p className="text-sm text-red-500 mt-1">{exp.duration}</p>
              <p className="text-md font-medium text-gray-700 mt-2">
                {exp.role}
              </p>
            </div>

            {/* RIGHT: Description */}
            <div className="md:w-1/2">
              <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {exp.description.trim()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
