import React from 'react'
import {
  FavoriteBorderOutlined,
  InsertComment
} from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';

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

const fontStyle = { color: '#DDD' }


const IconBar = ({ likes, commentList, img }) => {
  return (
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

      {/* image ico */}
      {
        img ?
          <>
            <CropOriginalIcon />
            <Typography variant="body2" component="span" style={commentStyle}>
              1
            </Typography>
          </>
          : ''
      }

    </>
  )
}

export default IconBar;