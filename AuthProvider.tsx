/* eslint-disable prefer-promise-reject-errors */

import { CognitoUser, Auth } from "@aws-amplify/auth";
import { AuthProvider } from "react-admin";

export const signIn = Auth.signIn.bind(Auth);

export const login = (params: any) => {
  if (params instanceof CognitoUser) {
    return Promise.resolve(params);
  }
  return signIn(params);
};

export const logout = () => Auth.signOut({ global: true });

export const currentSession = () =>
  Auth.currentSession().then((session) => {
    if (!session) {
      return Promise.reject("You need to sign in to access that page.");
    }
    return session;
  });

const authProvider: AuthProvider = {
  // authentication
  login: (params) => login(params),
  checkError: (error) => Promise.resolve(),
  checkAuth: (params) => Promise.resolve(),
  logout: () => logout(),
  getIdentity: async () => {
    const session = await currentSession();
    return {
      id: session.getIdToken().payload.id,
    };
  },
  // authorization
  getPermissions: (params) => Promise.resolve({}),
};

export default authProvider;
