import React, { useEffect, useState } from "react";
import { app } from "./base";

import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if (pending) {
    return (
      <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
        <FadeLoader
          css={override}
          size={250}
          color={"#36D7B7"}
          loading={true}
        />
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
