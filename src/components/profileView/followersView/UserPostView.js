import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import logo from '../../../assets/img/1ok.jpg'

const userPostView = (({author, context}) => {
  return (
    <>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={author} src={logo} />
        </ListItemAvatar>
        <ListItemText
          primary={context}
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
    </>

  )
})

export default userPostView;