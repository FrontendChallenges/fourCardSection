import React from 'react';
import Card from 'react-bootstrap/Card';

function SectionCard({ title, content, icon }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SectionCard;
