import React from 'react';
import './App.css';
import { Container, Box, Typography, Button, Link } from '@mui/material';
import { Instagram, LinkedIn, Web, Email } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import MyID from './MyID';

function App() {
  return (
    <Container
      maxWidth="md"
      className="container"
    >
      <MyID/>
      <br/>
      <br/>
      <br/>
      <Typography variant="h4" gutterBottom>
        Welcome to My LinkTree
      </Typography>
      <br/>
      <br/>
      <Box className="links-container">
        <Box className="links">
          <Link href="https://www.instagram.com/balporsuguaks" target="_blank" className="link">
            <Button
              variant="contained"
              startIcon={<Instagram />}
              className="link-button"
            >
              My Instagram
            </Button>
          </Link>
          <br/>
          <br/>
          <Link href="https://www.linkedin.com/in/ahmedkuddusisarikaya" target="_blank" className="link">
            <Button
              variant="contained"
              startIcon={<LinkedIn />}
              className="link-button"
            >
              My LinkedIn
            </Button>
          </Link>
          <br/>
          <br/>
          <Link href="https://www.carmesoft.com" target="_blank" className="link">
            <Button
              variant="contained"
              startIcon={<Web />}
              className="link-button"
            >
              Our Business Website
            </Button>
          </Link>
          <br/>
          <br/>
          <Link href="https://www.instagram.com/carmesoft" target="_blank" className="link">
            <Button
              variant="contained"
              startIcon={<Instagram />}
              className="link-button"
            >
              CarmeSoft Instagram
            </Button>
          </Link>
          <br/>
          <br/>
          <Link href="https://www.twitter.com/carmesoft" target="_blank" className="link">
            <Button
              variant="contained"
              startIcon={<XIcon />}
              className="link-button"
            >
              CarmeSoft Twitter
            </Button>
          </Link>
          <br/>
          <br/>
        </Box>
      </Box>
      <Box component="form" action="mailto:akuddusisarikaya@gmail.com" method="post" encType="text/plain" className="email-form">
        <Box className="email-container">
          <Button
            type="submit"
            variant="contained"
            startIcon={<Email />}
            className="email-button"
          >
            Send Email to me
          </Button>
        </Box>
      </Box>
      <Box component="form" action="mailto:info@carmesoft.com" method="post" encType="text/plain" className="email-form">
        <Box className="email-container">
          <Button
            type="submit"
            variant="contained"
            startIcon={<Email />}
            className="email-button"
          >
            Send Email to CarmeSoft
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
