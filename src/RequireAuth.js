// RequireAuth.js
import { useAuthenticator } from '@aws-amplify/ui-react';
import Login from "./Login";

export function RequireAuth({ children }) {
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Login />;
  }
  return children;
}
