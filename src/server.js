import express from 'express'

import router from './router.js'

import bodyParser from 'body-parser';

const port= 8080;

class Server{
    constructor(){
        this.app = express()
    }
    bootstrap(){
        this.app.use(express.json())
        this.setupRoutes();
    }
    setupRoutes(){
        this.app.use("/backend",router)
    }
    run(){
        this.app.listen(port,()=>{
            console.log("Server is listening at port",port)
        })
    }

}

export default Server


