import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { axAdmin } from "../axios/axios";

type Login = {
  email: string;
  password: string;
};

export const ScreenAuth = () => {
  const [login, setLogin] = useState<Login>({ email: "", password: "" });

  const dispatch = useDispatch();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "LOGIN",
      data: { email: login.email, password: login.password },
    });

    // axAdmin
    //   .post("/auth/login", {
    //     auth: {
    //       email: login.email,
    //       password: login.password,
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
  };

  axAdmin.interceptors.request.use((config) => {
    console.log(config.withCredentials);
    return config;
  });

  return (
    <div>
      <button
        onClick={() => {
          axAdmin
            .get("csrf")
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
        }}
      >
        CSRF
      </button>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="flex h-72 max-w-md flex-col items-center m-auto">
          <FaLock className="w-96 h-96 my-5 mt-10" />

          <div className="flex items-center flex-wrap">
            <input
              className="mx-auto my-2 p-2"
              type="email"
              placeholder="Email"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />

            <input
              className="m-auto my-2 p-2"
              type="password"
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </div>

          <button className="w-48 p-4 bg-slate-300">Login</button>
        </div>
      </form>
    </div>
  );
};
