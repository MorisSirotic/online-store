import { authLogin } from "../services/AuthService";

export interface AuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export type AuthActionData = {
  email: string;
  password: string;
};

type AuthAction =
  | { type: "LOGIN"; data?: AuthActionData }
  | { type: "LOGOUT"; data?: AuthActionData }
  | { type: "REGISTER"; data?: AuthActionData };

const initialState: AuthState = { email: "", password: "", isLoggedIn: false };

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN":
      authLogin(action.data!.email, action.data!.password)
        .then((res: any) => {
          console.log(res);
          return { isLoggedIn: true, email: res.email, password: res.password };
        })
        .catch((err) => {
          console.log(err)
        });

      return { ...state };
    case "LOGOUT":
      return { ...state };
    case "REGISTER":
      return { ...state };
    default:
      return state;
  }
};

export const login = (): AuthAction => {
  return { type: "LOGIN" };
};

export const logout = (): AuthAction => {
  return { type: "LOGOUT" };
};

export const register = (): AuthAction => {
  return { type: "REGISTER" };
};
