// pages/home.js
import React from 'react';  // Make sure React is imported
import { Container, Row, Col, Button, Image } from 'react-bootstrap';  // Import the necessary components

const Home = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: "url('https://via.placeholder.com/1500x800?text=Background+Image')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0' }}>
      <Container className="text-center text-white">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 mb-4 font-weight-bold" style={{ fontFamily: 'Arial, sans-serif' }}>Fast & Secure Online Payments</h1>
            <p className="lead mb-4" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
              Experience seamless transactions with Fast Pay. Whether you're a small business or an enterprise, we make payments easy.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              href="/signup" 
              style={{ padding: '12px 24px', borderRadius: '50px', fontWeight: '600' }}
              className="hover-effect">
              Get Started
            </Button>
          </Col>
          <Col md={6}>
            <Image 
              src="https://via.placeholder.com/500x300?text=Payment+Illustration" 
              alt="Online payment illustration" 
              fluid 
              style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} 
              className="hover-effect"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
