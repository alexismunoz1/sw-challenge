# Star Wars Wiki

Catálogo web de pelulas de Star Wars, utilizando los datos proporcionados por [The Star Wars API](https://swapi.dev/) , es una aplicación [React](https://es.reactjs.org/) construida con [Next.js](https://nextjs.org/). Los ui y componentes se crearon con [Material UI](https://mui.com/), la lógica de recuperación de datos se implementó con [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) para obtener los datos y [React Query](https://react-query-v3.tanstack.com/) para almacenar en caché y actualizar los datos.

### Puede visitar una demostración de la aplicación [aquí](https://sw-challenge-livid.vercel.app/)
### Puede visitar el diseño en figma [aquí](https://www.figma.com/file/RNmHKbOlZOlybiHGkpo0Th/StarWarsStartup?node-id=0%3A1)


# Carga de datos y almacenamiento en caché

La aplicación consta de dos páginas:

- El principal que renderiza en la ruta raíz `/;` muestra la lista principal de peliculas
- La página de detalles de la pelicula que aparece en la `/[id]` ruta (donde id es el ID de la pelicula); muestra la información del pelicula. También realiza nuevas solicitudes para recuperar la data los personajes mediante react-query.

La aplicación usa las funciones Next.js `getStaticProps` cargar la primera página del lado del servidor, por lo que toda la página inicial se representa estáticamente y `getStaticPaths` para prerenderizar las rutas dinámicas.

## Desarrollo

Primero, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test

1. Ejecute todas los test unitarios:

```bash
yarn test
```

2. Observe cualquier cambio de archivo y ejecute los test unitarios:

```bash
yarn test:watch
```

## Arquitectura
La arquitectura del sistema se diseñó para desacoplar los módulos principales tanto como fuera posible y mantener aisladas las dependencias externas para que los cambios futuros tuvieran el mínimo impacto posible.