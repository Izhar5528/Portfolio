import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'; // Create this CSS file for additional styles
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import project3Image from './assets/project3.png';
import project4Image from './assets/project4.png';
import project5Image from './assets/project5.jpeg';
import project6Image from './assets/project6.png';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    {
      id: 1,
      title: 'UI/UX Design',
      image: project1Image,
      description: 'UI/UX design, short for User Interface and User Experience design, is a critical aspect of creating user-friendly and visually appealing digital products, such as websites, mobile apps, and software interfaces.',
    },
    {
      id: 2,
      title: 'Development',
      image: project2Image,
      description: 'Development refers to the process of creating, building, and refining software applications, websites, and other digital solutions. It involves writing and organizing code to transform a concept or idea into a functional and interactive reality.',
    },
    {
      id: 3,
      title: 'Deployment',
      image: project3Image,
      description: 'Deployment refers to the final phase of the software development lifecycle, where a developed application or system is prepared and made available for use by its intended audience. It involves the process of moving the software from a development environment to a production environment,',
    },
    {
      id: 4,
      title: 'CI/CD',
      image: project4Image,
      description: 'A CI/CD pipeline, which stands for Continuous Integration and Continuous Deployment/Delivery, is a set of automated processes that facilitate the efficient and consistent development, testing, and deployment of software applications.It is a fundamental practice in modern software development that aims to streamline the delivery of high-quality code to production environments.',
    },
    {
        id: 5,
      title: 'Dockerization',
      image: project5Image,
      description: 'Dockerization, also known as containerization, is a technology that enables the packaging and distribution of software applications and their dependencies in a consistent and isolated environment called a container. These containers encapsulate an application along with all the libraries, frameworks, and settings it needs to run reliably across different computing environments.',
    },
    {
      id: 6,
      title: 'Graphic Design',
      image: project6Image,
      description: 'Graphic design is the creative practice of visually communicating ideas, information, or messages using a combination of typography, imagery, colors, and layout techniques. It is a crucial discipline that bridges art and technology to create visual solutions for a wide range of purposes, from advertising and branding to web design, print materials, and more.',
    },
    // Add more projects here
  ];

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    setShowModal(true);
  };

  return (
    <Container className="py-5">
      <h2 className="text-right mb-4 bold-heading">Portfolio</h2>
      <Row>
        {works.map((work) => (
          <Col key={work.id} md={4} sm={6} className="mb-4">
            <Card
              onClick={() => handleWorkClick(work)}
              className="portfolio-card shadow-sm rounded"
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>{work.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWork && selectedWork.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedWork && (
            <>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="img-fluid mb-3"
              />
              <p>{selectedWork.description}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Portfolio;

