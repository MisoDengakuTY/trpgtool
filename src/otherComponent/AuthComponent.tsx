import React from "react";
import {Nav} from 'rsuite';
import { useAuth0 } from "@auth0/auth0-react";

//Auth0の Allowed Callback URLs, Allowed Logout URLs を本番の時にURI設定しような☆
//.env弄ろうな？？？
require('dotenv').config()

const AuthComponent = () => {
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();


    if (isAuthenticated) {
        return (
            <Nav.Item onSelect = {() => logout({ returnTo: window.location.origin })}>
                Logout
            </Nav.Item>
        );
      } else {
        return (<Nav.Item onSelect = {() => {
            loginWithRedirect(
                {
                    redirect_uri: process.env.REDIRECT_URI
                }
            )   
        }}>Login</Nav.Item>);
      }
};

  export default AuthComponent;