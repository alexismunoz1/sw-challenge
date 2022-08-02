// Como la api de star wars solo opera con métodos GET 
// y como único header recibe "Content-Type": "application/json",
// decidí hacer una función con ambas configuraciones y que solo reciba un path o ruta.

// En caso de que la app escale, se podría hacer una función fetcher con methods y headers dinámicos,
// o una función fetcher para cada method o verbo.

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
