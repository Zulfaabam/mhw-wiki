import { LoginDTO } from "../Dto/UserDTO";

export const login = async (username: string, password: string) => {
  let data, error;

  try {
    const res: LoginDTO = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());

    data = res;
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export const getUser = async (token: string) => {
  let data, error;

  try {
    const res = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

    data = res;
  } catch (err) {
    error = err;
  }

  return { data, error };
};
