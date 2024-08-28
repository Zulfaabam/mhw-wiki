import { Box, Button } from "@mui/material";
import mhwLogo from "/MHW-logo.svg";
import { FormEvent, useState } from "react";
import InputField from "../components/InputField";

function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Logic for handling login can go here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-elder-recess">
      <div className="flex justify-center items-center flex-col">
        <p className="text-3xl font-bold">Welcome to</p>
        <img src={mhwLogo} alt="MHW logo" className="logo h-[14rem]" />
        <p className="text-3xl font-bold">Wiki</p>
      </div>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{ mt: 1 }}
        className="space-y-3"
      >
        <InputField
          size="small"
          required
          id="username"
          name="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          size="small"
          required
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default App;
