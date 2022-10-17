# FRONT-END Test para Zara

Creación de una mini-aplicación para comprar dispositivos moviles

## Scripts

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.
Abrir [http://localhost:3000](http://localhost:3000) para ver en el Browser

### `npm test`

Este punto se encuentra en desarrollo.

### `npm run build`

Se genera el build

### `npm run format`

Se utiliza Prettier para dar formato a todo el proyecto.

### `npm run lint`

Se utiliza Eslint para analizar el codigo del proyecto.

## Resumen del proyecto

### Estructura del Proyecto

```sh
├── src                         # Source code.
    ├── components              # reusable UI components
    ├── containers              # Page components/pages
    ├── redux                   # Redux store
        ├── actions             # All actions create here
        ├── constants           # Redux constants
        ├── reducers            # reducers to manage app's state
        ├── store               # redux store configured
    ├── sagas                   # App API calls/ asynchronous operations handle here
        ├── api.js              # Axios baseUrl configured here
        ├── index.js            # rootSaga
        ├── sampleSaga.js       # Sample/demo saga file
    ├── utils                   # conatins all utility files
        ├── routes.js           # Application routes handle here
├── index.js                    # React-redux and saga configured here
```

### Formateo y detección de errores

ESLint es un linter de código JavaScript. Su función es analizar el código de nuestra aplicación, detectar problemas en por medio de patrones y si esta a su alcance resolverlos él mismo. Por otro lado, Prettier es un formateador de código. Tambien analiza nuestro código JavaScript.

### Rutas (routes)

Las routes estan configuradas en el componente principal App y se utiliza react-router-dom

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

### Functional components con Hooks

Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función. Los hooks no funcionan dentro de las clases — te permiten usar React sin clases.

https://es.reactjs.org/docs/hooks-overview.html#:~:text=%C2%BFPero%20qu%C3%A9%20es%20un%20Hook,permiten%20usar%20React%20sin%20clases.

### Manejo de estados (Redux)

Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario. Dan Abramov y Andrew Clark se inspiraron en otra librería de Facebook, Flux ​ para crear Redux.

https://es.redux.js.org/

### Efectos secundarios (Sagas)

Redux Saga es una librería muy potente, que nos permite cubrir un buen número de escenarios avanzados. En esta acción formativa veremos como orquestar los side effects de una forma entendible y declaritva, evitando así: los callback hell y las cadenas de promesas.

https://redux-saga.js.org/

### Diseño

Este proyecto esta diseñado 100% con Material UI ahora es MUI. Que significa Material para construir interfaces de usuario y lo que ofrece un nombre bastante más corto. Con anterioridad, los devs ya utilizaban a MUI para definir a Material UI.

https://mui.com/material-ui/getting-started/installation/

Para este proyecto no se estan utilizando css , es un diseño sencillo y el proyecto esta enfocado en la funcionalidad.

### Cache

Se esta trabajando en este punto con localStorage

### Test

Se esta trabajando en este punto con @testing-library/react

```javascript
import { render, screen } from '@testing-library/react';
```

## Hitos del proyecto

### PLP - Product List Page

Este hito se desarrollo con el container Home y el componente ProductList

```javascript
import ProductList from '../../components/Product/ProductList';
```

### PDP - Product Details Page

Este hito se desarrollo con el componente ProductDetail y llama los componentes Image, Description y Image

```javascript
import ProductDetail from '../../components/Product/ProductDetail';
```

### Cabecera (HEADER)

Este hito se desarrollo con el componente Header

```javascript
import Header from '../../components/Header';
```

### Barra de Busqueda (SEARCH))

Este hito se desarrollo con el componente Search

```javascript
import Search from '../../components/Search';
```

### Elemento lista (ITEM)

Este hito se desarrollo con el componente ProductItem

```javascript
import ProductItem from './ProductItem';
```

### Imagen Producto (IMAGE)

Este hito se desarrollo con el componente Image

```javascript
import Image from '../Image';
```

### Descripción Producto (DESCRIPTION)

Este hito se desarrollo con el componente Description

```javascript
import Description from '../Description';
```

### Acciones Producto (ACTIONS)

Este hito se desarrollo con el componente Action

```javascript
import Actions from '../Actions';
```

### Persistencia

Estoy trabajando en la persistencia con localStorage

```javascript
import

```

### Problemas encontrados

## Añadir producto a la cesta

El /api/cart siempre me devuelve siempre {"count":1}

```sh
Usuario@DESKTOP-SQKNJID MINGW64 ~/Documents/Proyectos/ReactJs/phone-store (dev)
$ curl --request POST --url https://front-test-api.herokuapp.com/api/cart --header 'Content-Type: application/json' --cookie session_id=s%253AfymgFc2GClnXnooF4M7ALf5dgpUiifm4.hecHy2mhJ3E%252F3yKY5XRLfl8vlDEmNusT5WG6OG2KhdM --data '{"id": "owhq-O7mvLqthfcmkT7Wo", "colorCode": 1,"storageCode": 4}'
{"count":1}
Usuario@DESKTOP-SQKNJID MINGW64 ~/Documents/Proyectos/ReactJs/phone-store (dev)
$ curl --request POST --url https://front-test-api.herokuapp.com/api/cart --header 'Content-Type: application/json' --cookie session_id=s%253AfymgFc2GClnXnooF4M7ALf5dgpUiifm4.hecHy2mhJ3E%252F3yKY5XRLfl8vlDEmNusT5WG6OG2KhdM --data '{"id": "owhq-O7mvLqthfcmkT7Wo", "colorCode": 1,"storageCode": 4}'
{"count":1}
Usuario@DESKTOP-SQKNJID MINGW64 ~/Documents/Proyectos/ReactJs/phone-store (dev)
$
```

Para simular el añadir productos al carrito utilice una variable de localStorage que va sumando cada vez que apreto el boton.
