import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core'
import {
  FavoriteBorderOutlined,
  InsertComment
} from '@material-ui/icons'

const commentStyle = {
  fontSize: '0.6rem',
  position: 'relative',
  top: '-15px',
  right: '10px',
  padding: '5px 8px',
  borderRadius: '50%',
  background: '#818181',
  color: 'white'
}

const fontStyle = { color: '#BDBDBD' }

const userPostView = (({ author, context, commentList }) => {
  
  return (
    <>
      <ListItem button alignItems="flex-start">

        <ListItemAvatar>
          <Avatar alt={author} src={`logo`} />
        </ListItemAvatar>
        
        <ListItemText
          primary={context}
          secondary={
            <>
              {/* like ico */}
              <FavoriteBorderOutlined style={fontStyle} />
              {/* numbers of likes */}

              {/* comment ico */}
              <InsertComment style={fontStyle} />
              {/* numbers of comment */}
              {
                (!commentList.length) ? '' : (
                  <Typography variant="body2" component="span" style={commentStyle}>
                    {commentList.length}
                  </Typography>
                )
              }

            </>
          }
        />
      </ListItem>
    </>

  )
})

export default userPostView;