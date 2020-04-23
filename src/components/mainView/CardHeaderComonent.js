import React from 'react'
import {
  Avatar,
  CardHeader,
  Button
} from '@material-ui/core';
import { app } from "../../config/base";
import { Link } from 'react-router-dom'


const linkStyle = {
  textDecoration: 'none',
  cursor: 'pointer'
}

const btnStyle = {
  color: '#757575',
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

const randomColor = () => {
  let color = '';

  let num1 = (Math.floor(Math.random() * 256)),
    num2 = (Math.floor(Math.random() * 256)),
    num3 = (Math.floor(Math.random() * 256));

  color = `rgb(${num1},${num2},${num3})`

  return color;
}


export default function CardHeaderComponent() {
  const userProfile = `/profile/${setName()}`;

  return (
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" style={{ backgroundColor: randomColor() }}>
          {setAvatar()}
        </Avatar>
      }
      title={
        <Link to={userProfile} style={linkStyle} >
          <Button style={btnStyle} >
            {
              setName()

            }
          </Button>
        </Link>
      }
      action={
        <Link to={userProfile} style={linkStyle} >
          <Button style={btnStyle} >
            profile
          </Button>
        </Link>
      }
    />
  )
}