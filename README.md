<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar Desarollo
1. Clonar el repositorio.
2. Ejecutar.
```
yarn install
```
3. Tener NEST Cli instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__ y renombar la copia a __.env__

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecurtar la aplicacion dev:
```
yarn start:dev
```

8. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```



## Stack usado
* MongoDB
* NEST
