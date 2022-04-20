# Usar una imagen  
FROM node:current-alpine3.14

# Establecer el directorio de trabajo de nuestro contenedor
WORKDIR /usr/src/app

# Copiar el package.json a la carpeta /app de nuestro contenedor
COPY package.json /app

# Copiará otros archivos de la aplicación
COPY . .

# Ejecutar el comando npm set progress=false && npm install
RUN npm set progress=false && npm install

# Exponer el puerto 8086 de el contenedor docker, fin de documentación
EXPOSE 6006

# Correrá este comando al final cuando se esté corriendo el contenedor
CMD ["npm", "run", "storybook"]