# PruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Deploy 

La App esta desplegada en AWS(Amazon Web Services), concretamente en este [enlace](https://master.d2mpepwejwzgz3.amplifyapp.com/).

## API

La app trabaja sobre la api de The Movie Database. Es una api creada por la comunidad sobre las diferentes peliculas y series que existen o han existido.

(https://api.themoviedb.org/3/)

## Funcionamiento

La app consta de el home, la lista de peliculas, la lista de series y un login. Para poder visualizar cualquier pelicula o serie lo primero que tienes que hacer es hacer login. Una vez logueado prodras acceder a las listas y visualizar la información de cada una de las peliculas o series. Credenciales:

Username: FelipeGomez
Password: password

Las listas estan distribuidas en tarjetas con el poster del contenido y del titulo. Para acceder a mas información solo hace falta darle al boton que se encuentra en cada tarjeta donde pone "See more".

## Endpoints

Para el funcionamiento de la app he utilizado los siguientes endpoints, añadiendoles el parametro de la api key proporcionada por la propia pagina de The Movie DB:

- GET /movie/now_playing: para visualizar la lista de peliculas.
- GET /movie/id: para visualizar la información de una pelicula.
- GET /tv/on_the_air: para visualizar la lista de series en emisión.
- GET /tv/id: para visualizar la información de una serie.
- GET /authentication/token/new: para obtener un token valido.
- POST /authentication/token/validate_with_login: para validar el login del usuario.
