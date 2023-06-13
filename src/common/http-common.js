import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  // baseURL: "http://localhost:9191/api",
  baseURL: "http://travel-server.database.windows.net/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=utf-8",
    "API-Key": "secret",
    "Access-Control-Allow-Credentials": "*",
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: "include",
  // credentials: true,
});
