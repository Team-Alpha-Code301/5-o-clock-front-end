import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className="loginButton" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
