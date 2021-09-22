import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function SectionCard({ title, content, icon }) {
  return (
    <Card className='border-0'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <img src={icon} alt='icon' />
    </Card>
  );
}

export default SectionCard;
