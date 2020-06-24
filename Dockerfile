FROM node:14.4.0-alpine

WORKDIR /perfin-backend

# add node_modules/.bin to $PATH
ENV PATH /perfin-backend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]