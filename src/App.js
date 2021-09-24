import React from 'react';
import Footer from './components/Footer';
import Title from './components/Title';
import SectionCard from './components/SectionCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import calculator from './assets/images/icon-calculator.svg';
import karma from './assets/images/icon-karma.svg';
import supervisor from './assets/images/icon-supervisor.svg';
import team from './assets/images/icon-team-builder.svg';
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
            <Col className='m-auto'>
              <SectionCard
                title='Supervisor'
                content=' Monitors activity to identify project roadblocks'
                icon={supervisor}
                topLine='green'
              />
            </Col>
            <Col className='m-auto g-5'>
              <SectionCard
                title='Team Builder'
                content=' Scans our talent network to create the optimal team for your project'
                icon={team}
                topLine='red'
              />
              <SectionCard
                title='Karma'
                content='Regularly evaluates our talent to ensure quality'
                icon={karma}
                topLine='yellow'
              />
            </Col>
            <Col className='m-auto'>
              <SectionCard
                title='Calculator'
                content='Uses data from past projects to provide better delivery estimates'
                icon={calculator}
                topLine='blue'
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer author='Jinok' challengeBy='Frontend Mentor' />
    </>
  );
}

export default App;
