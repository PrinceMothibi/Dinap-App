// components/Login.js
import { useEffect } from "react";
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate, useLocation } from 'react-router';
import awsmobile from "./aws-exports";
import { Amplify } from "aws-amplify";


export default function Login() {
  Amplify.configure(awsmobile);
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}