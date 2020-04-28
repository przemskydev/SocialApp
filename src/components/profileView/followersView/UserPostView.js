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
  right: '5px',
  padding: '5px 8px',
  borderRadius: '50%',
  border: '1px solid #777',
  background: '#818181',
  color: 'white'
}
// style={{borderBottom:'#00ccd4'}}
const fontStyle = { color: '#DDD' }

const userPostView = (({ author, context, commentList, likes }) => {

  return (
    <>
      <ListItem 
      button 
      alignItems="flex-start" 
      style={{ 
        backgroundColor:'#444', 
        borderBottom: '1px solid #00ccd4',
        borderRadius: '4px',
        color: '#DDD' }}>

        <ListItemAvatar>
          <Avatar alt={author} src={`logo`} />
        </ListItemAvatar>

        <ListItemText
          primary={context}
          secondary={
            <>
              {/* like ico */}
              <FavoriteBorderOutlined
                style={(likes.length > 0) ? { color: '#ff0000' } : fontStyle} />
              {/* numbers of likes */}
              {
                (!likes.length) ? '' : (
                  <Typography variant="body2" component="span" style={commentStyle}>
                    {likes.length}
                  </Typography>
                )
              }
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