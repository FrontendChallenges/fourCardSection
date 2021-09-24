import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function SectionCard({ title, content, icon, topLine, bottomGap }) {
  return (
    <Card className='border-0'>
      <div
        className={
          topLine === 'red'
            ? 'card-top__red'
            : topLine === 'blue'
            ? 'card-top__blue'
            : topLine === 'green'
            ? 'card-top__green'
            : 'card-top__yellow'
        }
      ></div>
      <Card.Body className='p-5'>
        <Card.Title className='fw-bold pb-2'>{title}</Card.Title>
        <Card.Text className='fw-light'>{content}</Card.Text>
      </Card.Body>
      <Row className='card-img'>
        <img src={icon} alt='icon' />
      </Row>
    </Card>
  );
}

export default SectionCard;
