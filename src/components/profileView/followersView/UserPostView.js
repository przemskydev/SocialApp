import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'

import IconBar from './IconBar'

const userPostView = (({ author, context, commentList, likes, img }) => {

  return (
    <>
      <ListItem
        button
        alignItems="flex-start"
        style={{
          backgroundColor: '#444',
          borderBottom: '1px solid #00ccd4',
          borderRadius: '4px',
          color: '#DDD'
        }}>

        <ListItemAvatar>
          <Avatar alt={author} src={`logo`} />
        </ListItemAvatar>

        <ListItemText
          primary={context}
          secondary={
            <IconBar
              likes={likes}
              commentList={commentList}
              img={img}
            />
          }
        />
      </ListItem>
    </>

  )
})

export default userPostView;