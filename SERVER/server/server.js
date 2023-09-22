const express = require( "express" );
require( "dotenv" ).config();

class Server {
  
  constructor( ){
    this.app = express();
    this.port = process.env.PORT || 3000
  }

  routes( ) {

  }

  midlewares(  ){

  }

  start( ) {
    this.app.listen( this.port, ( )=> {
      console.log( ` Server init http://localhost:${this.port} ` )
    } )
  }

}


module.exports = Server;