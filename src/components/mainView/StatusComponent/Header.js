import React from 'react'
import {
  Avatar,
  CardHeader,
  Button,
  Tooltip
} from '@material-ui/core';
import { app } from "../../../config/base";
import { Link } from 'react-router-dom'

const linkStyle = {
  textDecoration: 'none',
  cursor: 'pointer'
}

const btnStyle = {
  color: '#DDD'
}

const setAvatar = () => {
  const avName = app.auth().currentUser.displayName;
  let avatar = avName.charAt(0);

  return avatar
}

const setName = () => {
  const user = app.auth().currentUser.displayName;

  return user
}

export default function CardHeaderComponent() {
  const userProfile = `/profile/${setName()}`;

  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" style={{ backgroundColor: '#9F2F0A' }}>
          {setAvatar()}
        </Avatar>
      }
      title={
        <Tooltip title='Go to your personal profile' placement='right'>
          <Link to={userProfile} style={linkStyle} >
            <Button style={btnStyle} >
              {
                setName()
              }
            </Button>
          </Link>
        </Tooltip>
      }
      action={
        <Tooltip title='Go to your personal profile' placement='left'>
          <Link to={userProfile} style={linkStyle} >
            <Button style={{ fontSize: '9px', color: '#DDD', borderBottom: '1px solid #BBB' }} >
              profile
          </Button>
          </Link>
        </Tooltip>
      }
    />
  )
}