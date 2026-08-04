import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const spotlightProjects = {
      "Business Consultancy Website": {
        title: "Business Consultancy Website",
        desc:
          "Built a responsive consultancy website with modern UI, service pricing, lead-capture forms, and portfolio filtering for an engaging user experience.",
        techStack: "HTML, CSS, JavaScript",
        link: "https://intern-work1-alpha.vercel.app",
        open: "https://intern-work1-alpha.vercel.app",
        image: "/assets/photo1.png",
      },
      // Truth: {
      //   title: "truth",
      //   desc:
      //     "A three.js simulation of the planet system revolving around a monolith.",
      //   techStack: "JAVASCRIPT (THREE.JS)",
      //   link: "https://github.com/rindhiya970/truth",
      //   open: "https://rindhiya970.github.io/Truth/",
      //   image: "/assets/truth.png"
      // },
      "Travelsite": {
        title: "Travelsite",
        desc:
          "Developed a responsive travel landing page featuring destination discovery, interactive tour cards, media integration, and newsletter-based user engagement.",
        techStack: "HTML, CSS, JavaScript",
        link: "https://food-donation-platform-xaxm.vercel.app/",
        open: "https://food-donation-platform-xaxm.vercel.app/",
        image: "/assets/Screenshot 2026-08-04 092540.png",
      },
      "Whisper Model": {
        title: "Whisper Model",
        desc:
          "Developed a lightweight FastAPI server for real-time audio transcription using the Faster-Whisper model. Built REST APIs to process uploaded audio files and generate accurate text transcriptions with CPU-based inference.",
        techStack: "Python, FastAPI, Faster-Whisper, REST API, Multipart File Upload",
        link: "https://github.com/rindhiya970/model-movement",
        open: "https://github.com/rindhiya970/model-movement",
        image: "/assets/photo3.png",
      },
    };
    const projects = {
      "MedIntel AI – Offline Medical RAG System": {
        desc:
          "Built an offline AI assistant that enables doctors to securely query patient records using natural language. Developed a LangChain and FAISS-powered RAG pipeline with OCR-based document indexing, while ensuring secure authentication, patient-level data isolation, and complete on-premise privacy.",
        techStack: "FastAPI, Python, React, LangChain, FAISS, Ollama, SOLite, OCR",
        link: "https://github.com/bhanu-3333/LLM-chatbot",
        open: "",
      },
      "CivicAlert –  Civic Governance Platform": {
        desc:
          "Developed a cross-platform civic reporting platform with AI-assisted issue submission, geolocation tracking, and real-time workflows. Integrated Claude Vision AI, MongoDB geospatial queries, Cloudinary, and Socket.IO, while ensuring reliability through GitHub Actions CI/CD and automated testing.",
        techStack: "React Native, Node.js, Express.js, MongoDB, Socket.IO",
        link: "https://github.com/rindhiya970/social-network",
        open: "",
      },
      "DataAnnotation": {
        desc:
          "Built a full-stack annotation platform for image and video datasets with secure project management. Integrated YOLOv8 auto-annotation, OpenCV-based frame extraction, and export of training-ready YOLO datasets to streamline computer vision model development.",
        techStack: "Vue.js, Flask, Python, SQLite, OpenCV, YOLOv8",
        link:
          "https://github.com/rindhiya970/data-Annotation",
      },
      "Verixa AI – Communication Platform": {
        desc:
          "Built an AI-powered accessibility platform that enables real-time Sign Language ↔ Text/Voice translation using an animated avatar. Integrated hospital and banking communication modes, multilingual support (English & Tamil), government services, emergency SOS with location sharing, QR-based communication, and secure authentication.",
        techStack: "React Native (Expo), TypeScript, FastAPI, Python, MongoDB, REST API, AI/ML, Speech APIs, JWT.",
        link: "https://github.com/bhanu-3333/Verixa-AI-App",
        open: "",
      },
      "HelpHive– Volunteer & Event Management Platform": {
        desc:
          "Built an AI-powered platform for managing volunteer events, enabling verified organizations to create events, recruit volunteers, and streamline operations. Features include an AI Event Planner for automated planning, budget optimization, and resource allocation, along with a Sponsor Hub for discovering sponsors, viewing eligibility, and sending sponsorship requests directly from the app",
        techStack: "React Native (Expo), Node.js, Express.js, MongoDB, JWT, Multer, Nodemailer, REST APIs, AI Integration.",
        link: "https://github.com/rindhiya970/event-and-volunteer-management",
        open: "",
      },
      "AR Dashboard – Sales Analytics & Data Visualization Platform": {
        desc:
          "Developed a Python-based sales analytics dashboard for data processing, visualization, and reporting. Implemented data modeling, interactive chart generation, and a backend server, with cloud-ready deployment support using Render.",
        techStack: "Python",
        link: "https://github.com/rindhiya970/AR_Dashboard_Dataset",
        open: "",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <div>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </div>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}

                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
