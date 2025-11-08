FROM node:20-alpine

WORKDIR /app

# Copia e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Faz o build após ter o código
RUN npm run build

# Expõe a porta e define o comando de inicialização
EXPOSE 3000
CMD ["npm", "run", "start"]
