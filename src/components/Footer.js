import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer({ author, challengeBy }) {
  return (
    <footer>
      <Container className='text-center'>
        <p class='attribution'>
          Challenge by
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            {challengeBy}
          </a>
          . Coded by <a href='#top'>{author}</a>.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
