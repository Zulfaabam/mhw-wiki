import mhwLogo from "/MHW-logo.svg";
import { FormEvent, useContext, useState } from "react";
import InputField from "../components/InputField";
import { login } from "../services/AuthService";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const cookies = new Cookies();

function Login() {
  const navigate = useNavigate();

  const userContext = useContext(AuthContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    login(username, password)
      .then((res) => {
        if (res.data?.refreshToken) {
          cookies.set("auth-token", res.data?.refreshToken);
          setMessage("Success!");
          userContext?.fetchUser(res.data?.refreshToken);
          navigate("/");
        } else {
          setMessage("Login Failed!");
        }
      })
      .catch((error) => setMessage(error));
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-elder-recess">
      <div className="flex justify-center items-center flex-col text-white w-2/3">
        <img src={mhwLogo} alt="MHW logo" className="logo h-[20rem]" />
      </div>
      <div className="border h-full bg-white w-1/3 flex flex-col justify-center items-center gap-3">
        <div className="text-center mb-2">
          <p className="text-3xl font-bold">Welcome to</p>
          <p className="text-3xl font-bold">Monster Hunter World</p>
          <p className="text-3xl font-bold">Wiki</p>
        </div>
        <div className="w-60">
          <InputField
            required
            id="username"
            name="username"
            label="Username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-60">
          <InputField
            required
            name="password"
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white w-60 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          onClick={handleLogin}
        >
          Login
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
