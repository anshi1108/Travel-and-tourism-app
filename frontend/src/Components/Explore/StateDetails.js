import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './StateDetails.css'; // Include your CSS file
import Header from '../Navbar/Navbar'
import Footer from '../Footer/Footer.js'

const StateDetails = () => {
  const StateDetails = {
    food: 'Mauritian Curry, Dholl Puri, Rougaille. Mauritian cuisine is a melting pot of flavors influenced by various cultures, including Indian, Chinese, French, and Creole. Enjoy these delicious dishes at local eateries or fine dining establishments for an unforgettable culinary experience.',
    places: [
      'Port Louis: The vibrant capital city, known for its bustling markets and cultural diversity.',
      'Le Morne: A UNESCO World Heritage site, famous for its stunning mountain and crystal-clear waters.',
      'Chamarel: Home to the Seven Colored Earths, a natural phenomenon that mesmerizes visitors.',
      'Île aux Cerfs: A small island known for its beautiful beaches and water sports activities.'
    ],
    hotels: [
      'Shangri-La Le Touessrok: A luxury resort offering beachfront views and world-class amenities.',
      'The Oberoi Mauritius: Known for its impeccable service and lavish accommodations, set in a lush garden.',
      'One&Only Le Saint Géran: A luxurious beachfront hotel that provides a private paradise for guests.'
    ],
    mainImage: 'https://images.unsplash.com/photo-1513415431848-a433b3de449f?q=80&w=800&auto=format&fit=crop',
    additionalImages: [
      'https://images.unsplash.com/photo-1641733769983-c72d847d5787?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1667401373118-ca226f9cf0a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: 'Mauritius is a tropical paradise known for its breathtaking landscapes and rich cultural heritage. From the stunning beaches with soft white sands to the lush green mountains and vibrant flora and fauna, every corner of this island nation offers a unique experience. The warm hospitality of the locals adds to the charm of Mauritius, making it a perfect destination for relaxation, adventure, and exploration. Visitors can engage in various activities such as snorkeling, diving, hiking, and experiencing the diverse culinary offerings that reflect the island’s multicultural influences. Whether you are looking for a romantic getaway, a family vacation, or an adventure-filled trip, Mauritius has something special for everyone.',
  };

  return (
    <>
      <Header />
      <Container fluid className="mauritius-tourism">
        <Row className="hero-section">
          <Col className="text-center">
            <h1 className="hero-title">Discover Mauritius</h1>
            <p className="hero-description">{StateDetails.description}</p>
            <Button variant="primary" size="lg" className="book-button">Book Now</Button>
          </Col>
        </Row>
        <Row className="main-image">
          <Col>
            <img src={StateDetails.mainImage} alt="Mauritius" className="img-fluid main-image-style" />
          </Col>
        </Row>
        <Row className="info-section mt-4">
          <Col md={6}>
            <h2>Popular Foods</h2>
            <p>{StateDetails.food}</p>
          </Col>
          <Col md={6}>
            <h2>Places to Visit</h2>
            <p>{StateDetails.places.join('. ')}</p>
          </Col>
        </Row>
        <Row className="hotels-section mt-4">
          <Col>
            <h2>Recommended Hotels</h2>
            <p>{StateDetails.hotels.join('. ')}</p>
          </Col>
        </Row>
        <Row className="additional-images mt-4">
          {StateDetails.additionalImages.map((image, index) => (
            <Col md={4} key={index} className="mb-4">
              <img src={image} alt={`View ${index + 1} of Mauritius`} className="img-fluid additional-image-style" />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default StateDetails;
