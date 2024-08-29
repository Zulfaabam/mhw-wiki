import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import mhwLogo from "/MHW-logo.svg";

const Navbar = () => {
  const userContext = useContext(AuthContext);

  return (
    <nav className="absolute bottom-0 bg-slate-100 w-full px-2 sm:px-4 lg:px-8 h-16 flex justify-center items-center">
      <ul className="flex justify-center items-center text-blue-400 gap-10 font-semibold text-lg">
        <li>
          <a href="/">Weapons</a>
        </li>
        <li>
          <img src={mhwLogo} className="h-14 logo" alt="MHW logo" />
        </li>
        <li>
          {userContext?.user ? (
            userContext?.user?.username
          ) : (
            <a href="/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
