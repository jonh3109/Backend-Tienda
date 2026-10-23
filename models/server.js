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
    this.app.get("/api", (req, res) => {
      res.json({
         msg: "GET - Server " 
        
        });
    });

    this.app.post("/api", (req, res) => {
      res.json({
         msg: "POST - Server " 
        
        });
    });

    this.app.put("/api", (req, res) => {
      res.json({
         msg: "PUT - Server " 
        
        });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
         msg: "DELETE - Server " 
        
        });
    });
  }



  //METODO 3 DE MI CLASE SERVER
  middlewares() {
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

