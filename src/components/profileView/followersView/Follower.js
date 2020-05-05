import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const FollowerView = ((props) => {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <PersonIcon
            style={{
              color: '#00ccd4'
            }} />
        </ListItemIcon>
        <ListItemText
          style={{
            color: '#DDD'
          }}
          primary={props.follower} />
      </ListItem>
    </>

  )
})

export default FollowerView;