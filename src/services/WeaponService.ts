export const getAllWeapons = async (type: string) => {
  let response, error;

  try {
    const res = await fetch(
      `https://mhw-db.com/weapons?q={"type":"${type}"}`
    ).then((response) => response.json());

    response = res;
  } catch (err) {
    error = err;
  }

  return { response, error };
};

export const getSpecificWeapon = async (id: string | undefined) => {
  let response, error;

  try {
    const res = await fetch(`https://mhw-db.com/weapons/${id}`).then(
      (response) => response.json()
    );

    response = res;
  } catch (err) {
    error = err;
  }

  return { response, error };
};
