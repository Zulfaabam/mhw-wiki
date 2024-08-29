import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import mhwLogo from "/MHW-logo.svg";
import ProfileMenu from "./ProfileMenu";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const Navbar = () => {
  const userContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState<boolean>(false);

  return (
    <nav className="absolute bottom-0 bg-slate-100 w-full px-2 sm:px-4 lg:px-8 h-16 flex justify-center items-center">
      <ul className="flex justify-center items-center text-blue-400 gap-10 font-semibold text-lg">
        <li>
          <a href="/weapons">Weapons</a>
        </li>
        <li>
          <img src={mhwLogo} className="h-14 logo" alt="MHW logo" />
        </li>
        <li className="relative">
          {userContext?.user ? (
            <button onClick={() => setOpenProfile(!openProfile)}>
              {userContext?.user?.username}
            </button>
          ) : (
            <a href="/login">Login</a>
          )}
          {openProfile ? (
            <ProfileMenu
              className="absolute -top-32"
              username={userContext?.user?.username}
              email={userContext?.user?.email}
              onSignOut={() => {
                cookies.remove("auth-token");
                navigate("/login");
              }}
            />
          ) : null}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
