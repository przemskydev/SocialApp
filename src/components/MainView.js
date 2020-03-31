import * as React from 'react'
import HowAreYou from './HowAreYou';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function MainView() {

  return (
    <React.Fragment>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh', paddingTop: '64px' }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item xs={12}>
            <HowAreYou />
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  )
}