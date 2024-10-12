import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer.js'

const ExploreNow = () => {
  const navigate = useNavigate();

  const states = [
    {
      name: 'Mauritius',
      image: 'https://images.unsplash.com/photo-1513415431848-a433b3de449f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Relax on the beautiful beaches and explore the unique biodiversity of Mauritius.',
    },
    {
      name: 'Greece',
      image: 'https://plus.unsplash.com/premium_photo-1661964068107-6d7f6f4fea51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Enjoy the stunning architecture, rich history, and vibrant culture of Greece.',
    },
    {
      name: 'Egypt',
      image: 'https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Explore the ancient pyramids and the rich history of Egypt.',
    },
    {
      name: 'Japan',
      image: 'https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Experience the unique blend of tradition and modernity in Japan, from cherry blossoms to skyscrapers.',
    },
    {
      name: 'Switzerland',
      image: 'https://plus.unsplash.com/premium_photo-1690099567559-706ce29ef4de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Discover breathtaking alpine landscapes and charming villages in Switzerland.',
    },
  ];


  const handleExplore = (stateName) => {
    navigate(`/state/${stateName}`);
  };

  return (
    <>
      <Header />
      <Container className="mt-4">
        <h2 className="text-center mb-4">Explore Now</h2>
        <Row>
          {states.map((state, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card>
                <Card.Img variant="top" src={state.image} alt={state.name} />
                <Card.Body>
                  <Card.Title>{state.name}</Card.Title>
                  <Card.Text>{state.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleExplore(state.name)}>
                    Explore More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ExploreNow;
