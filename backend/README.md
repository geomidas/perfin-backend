# Backend
The backend is build in JavaScript, using NodeJS

## Start the backend
```
cd ~/repos/public_repos/perfin/backend/
npx nodemon --exec npx babel-node src/server.js
```

## Send requests to the backend
You can use postman or a simple curl command

 -  GET request

	url: `localhost:8000/hello`

 - POST request

	url: `localhost:8000/hello`

	body: `{"name": "Whatever"}`
