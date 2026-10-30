import express, { Router } from "express";
import "dotenv/config";
import cors from "cors"
import router from "../routes/users.js";


export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    this.usuariosPath = '/api/usuarios';
    this.middlewares();
    this.routes();

  }

  routes() {
    this.app.use (this.usuariosPath, router);
  }



  //METODO 3 DE MI CLASE SERVER
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  //primer metodo de mi clase server 
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto: ${this.port}`);
    });
  }
}
export default Server;

