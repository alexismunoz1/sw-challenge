export const fetchApiGet = async (path: string): Promise<Response> => {
  const BASE_URL = `https://swapi.dev/api/${path}`;

  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 200 && res.status < 300) {
    return await res.json();
  } else {
    throw { error: res };
  }
};
