import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function SectionCard({ title, content, icon, topLine }) {
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
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <img src={icon} alt='icon' />
    </Card>
  );
}

export default SectionCard;
