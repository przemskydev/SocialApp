import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardActions,
  CardContent,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField
} from '@material-ui/core';
import {FavoriteBorderOutlined, InsertComment} from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '95vh',
    margin: '1rem 0'
  },
  heading: {
    width: '-webkit-fill-available',
  },
  commentBar: {
    width: '-webkit-fill-available',
    margin: '1rem auto ',

  }
}))

export default function Post() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} container
        direction="row"
        justify="center"
        alignItems="center">
        <Card className={classes.paper}>
          <Grid item xs={12}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  P
                </Avatar>
              }
              title="Pszemsky"
            />
          </Grid>
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} style={{marginLeft:'1rem'}}>
            <FavoriteBorderOutlined style={{ color: '#BDBDBD' }}/>
            <InsertComment style={{ color: '#BDBDBD' }}/>
          </Grid>
          <Grid item xs={12}>
            <CardActions disableSpacing>
              <ExpansionPanel className={classes.heading}>
                <ExpansionPanelSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography component="span" style={{ fontSize: '1rem', marginLeft: 'auto' }}>Add comment</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography component="div" style={{ width: '100%' }}>
                    <TextField className={classes.commentBar}
                      id="outlined-textarea"
                      label="Place your comment"
                      placeholder="Stop hate!"
                      multiline
                      variant="outlined"
                    />
                    <Button
                      variant="outlined"
                      color="primary">
                      Add
                    </Button>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </div>
  )
}