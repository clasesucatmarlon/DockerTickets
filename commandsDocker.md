# Crear imagen:  
  docker build . -t server-tickets:latest

# Ver imagenes:  
  docker images

# Levantar imagen  
   docker run server-tickets:latest

# Levantar imagen con variables de entorno con puerto
   docker run --env-file=./.env -p 4000:4000 server-tickets:latest 

# Levantar servicios - root del proyecto
  docker-compose up