import * as React from 'react';
import Navbar from './Navbar/Navbar';
import MainView from './templates/MainView';
import { Typography, Container } from '@material-ui/core';
import './main.css'

export function Main() {
  return (
    <>
      <Navbar />
      <Container maxWidth='xl' className='mainView'>
        <Typography component="div" >
          <MainView />
        </Typography>
      </Container>
    </>
  )
}