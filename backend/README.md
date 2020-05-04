# Backend
The backend is built in JavaScript, using NodeJS

## Start the backend
```
cd ~/repos/public_repos/perfin/backend/
npx nodemon --exec npx babel-node src/server.js
```

## Send requests to the backend
You can use `curl` commands or [postman](https://www.postman.com/)

 -  GET request

	url: `localhost:8000/hello`

 - POST request

	url: `localhost:8000/hello`

	body: `{"name": "Whatever"}`
