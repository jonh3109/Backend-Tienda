
import express from "express";
import "dotenv/config";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;


    this.middlewares();
    this.routes();

  }

  routes() {
    // segundo metodo de mi clase server.
    this.app.get("/", (req, res) => {
      res.send({
         message: "Hola mundo desde mi servidor" 
        
        });
    });
  }
  //METODO 3 DE MI CLASE SERVER
  middlewares() {
    this.app.use(express.static("public"));
  }

  //primer metodo de mi clase server 
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto: ${this.port}`);
    });
  }
}
export default Server;
