import React from 'react'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player } from "@lottiefiles/react-lottie-player"; 

const Medical = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', overflowX: 'hidden' }}>
      <Header />
      
      <LeasingOptions />
    
      <Benefits />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header
    style={{
      background: 'linear-gradient(to right, #4e73df, #1cc88a)',
      color: 'white',
      textAlign: 'center',
      padding: '100px 20px',
      position: 'relative',
    }}
  >
    <Container>
      <Row className="text-center">
        <Col>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', animation: 'fadeInUp 1s ease-out' }}>
            Transform Your Business with Leasing
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              marginBottom: '30px',
              animation: 'fadeInUp 1s ease-out',
              animationDelay: '0.5s',
            }}
          >
            Lease the latest technology, medical equipment, vehicles, and more to take your business to the next level.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="#leasing-options"
            style={{
              padding: '15px 30px',
              fontSize: '1.2rem',
              borderRadius: '30px',
              backgroundColor: '#ff7e5f',
              border: 'none',
              animation: 'fadeInUp 1s ease-out',
              animationDelay: '1s',
            }}
          >
            Explore Leasing
          </Button>
        </Col>
      </Row>
      {/* Decorative background circle */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          backgroundColor: '#fff',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          opacity: 0.2,
          transform: 'rotate(45deg)',
        }}
      ></div>
    </Container>
  </header>
);

const LeasingOptions = () => (
  <section
    id="leasing-options"
    style={{
      padding: '60px 20px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out',
    }}
  >
    <Container fluid>
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '50px',
          color: '#333',
        }}
      >
        Our Leasing Options
      </h2>
      <Row
        style={{
          display: 'flex',
          gap: '30px',  // Control spacing between cards
        }}
      >
        {leasingItems.map((item, index) => (
          <Col
            xs={12}  // Full width on small screens
            md={4}   // 3 columns on medium screens
            lg={2}   // 6 columns on large screens
            key={index}
            className="mb-4"
          >
            <Card
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Player
                src={item.LottieAnimation}
                loop
                autoplay
                style={{
                  height: '40%',
                  width: '80%',
                  marginBottom: '20px',
                  alignSelf: 'center',
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ color: '#555' }}>
                  {item.description}
                </Card.Text>
                <Button
                  variant="outline-primary"
                  style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    color: 'white',
                  }}
                >
                  Get Started
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const Benefits = () => (
  <section
    style={{
      padding: '60px 20px',
      backgroundColor: '#ffedff',
      textAlign: 'center',
      animation: 'fadeInUp 1s ease-out',
    }}
  >
    <Container>
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '50px',
          color: '#333',
        }}
      >
        Why Choose Leasing?
      </h2>
      <Row>
        {benefits.map((benefit, index) => (
          <Col md={4} key={index} style={{ marginBottom: '30px' }}>
            <div
              style={{
                marginBottom: '15px',
                color: '#ff7e5f',
                fontSize: '40px',
                transition: 'transform 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.color = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.color = '#ff7e5f';
              }}
            >
              <FaCheckCircle />
            </div>
            <h5 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{benefit}</h5>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '30px 0',
      textAlign: 'center',
    }}
  >
    <Container>
      <Row>
        <Col>
          <p style={{ margin: 0 }}>
            &copy; 2024 Leasing Solutions. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Leasing options data
const leasingItems = [
  { title: 'Medical Equipment', description: 'Lease advanced medical devices for healthcare professionals.', LottieAnimation: "https://lottie.host/3d7a5ae4-a40d-4040-94b1-2294dc5a5d18/7d4jHz0Hpq.json" },
  // { title: 'Plant and Machinery', description: 'Lease industrial machinery for your business needs.', LottieAnimation: "https://lottie.host/894090d9-5c8b-473b-a38c-151e9dd457fc/MsUL07dMoo.json" },
  // { title: 'Laptop/ Desktop/ Printers', description: 'Access the latest IT hardware with leasing options.', LottieAnimation: "https://lottie.host/47f9e7c0-07fb-41cf-85b5-35fda22a5bad/OazBToNVQR.json" },
  // { title: 'Servers and Storage', description: 'Lease scalable server solutions to support your IT infrastructure.', LottieAnimation: "https://lottie.host/c063cfb7-25c1-45ba-baba-6917c398cb7b/1ozt0UbEt9.json" },

  { title: 'Construction Equipment', description: 'Lease heavy-duty construction equipment for projects.', LottieAnimation: "https://lottie.host/6613c777-e380-4230-b013-dc4ba7d29599/hiqoBsWDST.json" },
  // { title: 'Commercial Vehicles', description: 'Lease commercial vehicles for your business logistics.', LottieAnimation: "https://lottie.host/211d97e5-ea79-4a97-b912-900b8bd022f1/EZ8v5aGXM7.json" },
  
];

// Benefits list
const benefits = [
  'Refresh old with latest technology',
  'Preserves credit line',
  'Increase bottom line and grow business',
  'Invest your cash',
  'Avoid obsolescence',
  'Cashflow management linked to rental',
  'Tax Advantage',
  'Budget control',
  'Improved ROI',
  'Debt Equity ratio not affected',
  'No NOC required from bank',
];

export default Medical;
