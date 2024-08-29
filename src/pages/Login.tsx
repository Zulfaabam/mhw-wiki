import mhwLogo from "/MHW-logo.svg";
import { FormEvent, useContext, useEffect, useState } from "react";
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
          navigate("/weapons");
        } else {
          setMessage("Login Failed!");
        }
      })
      .catch((error) => setMessage(error));
  };

  useEffect(() => {
    const loggedUserToken = cookies.get("auth-token");

    if (loggedUserToken) {
      navigate("/weapons");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full bg-elder-recess p-4">
      <div className="flex justify-center items-center flex-col text-white md:w-2/3 w-full mb-4 md:mb-0">
        <img src={mhwLogo} alt="MHW logo" className="logo h-48 lg:h-80" />
      </div>
      <div className="border bg-white md:w-1/3 md:h-full w-full p-8 rounded-lg flex flex-col justify-center items-center gap-3 shadow-lg">
        <div className="text-center mb-4">
          <p className="text-2xl md:text-3xl font-bold">Welcome to</p>
          <p className="text-2xl md:text-3xl font-bold">Monster Hunter World</p>
          <p className="text-2xl md:text-3xl font-bold">Wiki</p>
        </div>
        <div className="w-full max-w-xs">
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
        <div className="w-full max-w-xs">
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
          className="text-white w-full max-w-xs bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
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
