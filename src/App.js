import React from 'react';
import Footer from './components/Footer';
import Title from './components/Title';
import SectionCard from './components/SectionCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/sass/custom.scss';

function App() {
  return (
    <>
      <main>
        <Container fluid={'md'}>
          <Row>
            <Title
              titleTop='Reliable, efficient delivery'
              titleBottom='Powered by Technology'
              subtitle='Our Artificial Intelligence powered 
              tools use millions of project data points to 
              ensure that your project is successful'
            />
          </Row>
          <Row>
            <SectionCard
              title='Supervisor'
              content=' Monitors activity to identify project roadblocks'
            />
            <SectionCard
              title='Team Builder'
              content=' Scans our talent network to create the optimal team for your project'
            />
            <SectionCard
              title='Karma'
              content='Regularly evaluates our talent to ensure quality'
            />
            <SectionCard
              title='Calculator'
              content='Uses data from past projects to provide better delivery estimates'
            />
          </Row>
        </Container>
      </main>
      <Footer author='Jinok' challengeBy='Frontend Mentor' />
    </>
  );
}

export default App;
