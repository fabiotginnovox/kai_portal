import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AccessService,
  ApiError,
  OpenAPI,
  UserService,
} from "../clients/innocore";
import {
  deleteUserData,
  deleteUserToken,
  deleteAnonymousUserToken,
  getUserToken,
  saveUserData,
  saveUserToken,
  getAnonymousUserToken,
  saveAnonymousUserToken,
  deleteAssistantSessionId,
} from "./DataContext";



type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  createAnonymousUser: () => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!getUserToken() || !!getAnonymousUserToken();

  const signOut = useCallback(() => {
    deleteUserToken();
    deleteUserData();
    deleteAnonymousUserToken();
    deleteAssistantSessionId();
    navigate("/");
  }, [navigate]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const token = await AccessService.tokenAccessAccessTokenPost(
          {
            username: email,
            password: password
          });
        saveUserToken(token.access_token);
        OpenAPI.TOKEN = token.access_token;
        if (token.user) saveUserData(token.user);
        navigate("/dashboard");
      } catch (error) {
        if (error instanceof ApiError) {
          if (error.status === 404) {
            throw new Error("user_not_registered");
          } else if (error.status === 401) {
            throw new Error("invalid_credentials");
          } else {
            throw new Error("login_failed");
          }
        } else {
          throw new Error("login_failed");
        }
      }
    },
    [navigate]
  );

  const createAnonymousUser = useCallback(
    async () => {
      const token = await UserService.createLoginAnonymousUserUserCreateLoginAnonymousUserPost();
      saveAnonymousUserToken(token.access_token);
      OpenAPI.TOKEN = token.access_token;
    },[isAuthenticated, navigate]
  )

  const signUp = useCallback(
    async (email: string, password: string) => {
      try {
        await UserService.createItemUserPost({
          email: email,
          password: password,
        });

        await signIn(email, password);
      } catch (error) {
        if (error instanceof ApiError) {
          if (error.status === 409 || error.status === 400) {
            throw new Error("user_already_exists");
          } else {
            throw new Error("registration_failed");
          }
        } else {
          throw new Error("registration_failed");
        }
      }
    },
    [signIn]
  );

  const contextValue = useMemo(
    () => ({
      signIn,
      signUp,
      signOut,
      isAuthenticated,
      createAnonymousUser,
    }),
    [
      signIn,
      signUp,
      signOut,
      isAuthenticated,
      createAnonymousUser,
    ]
  );

  useEffect(() => {
    const isWithinDashboard = pathname.startsWith("/dashboard");
    if (isWithinDashboard && !isAuthenticated) {
      navigate("/login");
    }
  }, [pathname, isAuthenticated, navigate]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
