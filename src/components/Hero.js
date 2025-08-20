import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-h-[50vh] flex items-center justify-center bg-white px-6"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - NAME + BUTTONS */}
          <div className="text-left">
            <h2 className="text-sm uppercase text-gray-500 mb-2 tracking-wide">
              Welcome to My Portfolio,
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Full Stack Developer
            </h1>
            <div className="flex gap-4 mb-4">
               {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-5 py-2 rounded-full font-medium hover:bg-red-600 transition"
              >
                Resume
              </a> */}
              <a
                href="https://www.linkedin.com/in/kiranpvs110399"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* ABOUT ME - MOVED UP CLOSER */}
      <section className="bg-gray-100 py-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            ABOUT MYSELF
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            I am a Full-Stack Software Engineer with 5+ years of experience in finance and healthcare domains, delivering secure, cloud-native applications. I have built scalable Spring Boot microservices and secure REST APIs, deploying them on AWS and Red Hat OpenShift to ensure high performance and reliability. My expertise spans developing React.js dashboards using Redux and Axios, implementing CI/CD pipelines with Docker and Jenkins, and securing platforms with Spring Security, JWT, and OAuth 2.0. I am proficient in multiple programming languages including Java, Python, SQL, TypeScript, JavaScript, and Kotlin, and experienced with frameworks such as Spring Boot, Spring MVC, Spring Data JPA, Spring Cloud, Express.js, React Native, and GraphQL. My technical skill set extends to cloud platforms like AWS (SQS, SNS, S3, EC2, Lambda, CloudFormation), databases including MySQL, PostgreSQL, MongoDB, and Oracle, and tools such as Git, GitHub, Kubernetes, Swagger UI, SOAP UI, RabbitMQ, and Mockito. Following SDLC best practices and Agile/Scrum-Ban methodologies, I collaborate closely with cross-functional teams to deliver high-quality, production-ready features that drive business value.
          </p>

          {/* ICON BUTTONS CENTERED 
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-4xl hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kiranpvs110399"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-4xl hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
          </div> */}
        </div>
      </section>

    </>
  );
};

export default Hero;
