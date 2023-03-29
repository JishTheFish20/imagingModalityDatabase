import http from 'http'
import express, {Express} from 'express'
import * as modalityController from './controllers/modality-controller'
import * as homeController from './controllers/home-controller'

const router: Express = express();


const httpServer = http.createServer(router)

router.use('',
    homeController.default,
    modalityController.default
)

httpServer.listen(6600, ()=>{
    console.log("Server is Running at port 6600");
})
