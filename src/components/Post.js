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
  TextField,
  IconButton
} from '@material-ui/core';
import { FavoriteBorderOutlined, InsertComment } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '90vh',
    margin: '1rem 0'
  },
  comment: {
    width: '80vh',
    margin: '1rem 0'
  },
  heading: {
    width: '-webkit-fill-available',
  },
  commentBar: {
    width: '-webkit-fill-available',
    margin: '1rem auto '
  }
}))

export default function Post(props) {
  const classes = useStyles();
  let author = props.author;
  let avatar = author.charAt(0);
  let postContent = props.context;
  let commentContent = 'comment'

  return (
    <div className={classes.root}>
      <Grid container container
        direction="row"
        justify="center"
        alignItems="center">
        <Card className={classes.paper}>
          {/* header */}
          <Grid item xs={12}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {avatar}
                </Avatar>
              }
              title={author}
            />
          </Grid>
          {/* post content */}
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {postContent}
              </Typography>
            </CardContent>
          </Grid>
          {/* like buttons */}
          <Grid item xs={12} style={{ marginLeft: '1rem' }}>
            <IconButton >
              <FavoriteBorderOutlined style={{ color: '#BDBDBD' }} />
            </IconButton>
            <IconButton >
              <InsertComment style={{ color: '#BDBDBD' }} />
            </IconButton>
          </Grid>
          {/* add comment section */}
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
          {/* comments- if they are */}
          <Grid item xs={12}>
            <Grid container justify="center">
              <Card className={classes.comment}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {avatar}
                    </Avatar>
                  }
                  title={author}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {commentContent}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  )
}