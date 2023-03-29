import express, {Request, Response} from 'express';
import * as modalityService from '../services/modality-service'

const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/modalitys', (req: Request, res: Response) => {
    modalityService.getModalitys().then(
        (modalitys) => {
            res.send(modalitys);
            }).catch((error)=> {
                res.send(error.message)
        })
});

router.get('/modalitys/:firstname', (req: Request, res: Response) =>{
    modalityService.getModalityByName(req.params.firstname).then(
        (modality) => {
            res.send(modality);
        }
    );
});

router.post('/modalitys', (req: Request, res: Response) =>{
    modalityService.saveModality(req.body).then(
        () => {
            message: "Modality was inserted"
        }
    ).catch((error)=>{
        res.status(303).json({
            message: "Error occured " + error.message
        })
    });
});

router.put('/modalitys/:firstname', (req: Request, res: Response) =>{
    modalityService.updateModality(req.params.firstname, req.body).then(
        () => {
            res.status(200).json({
                message: "Modality was updated"
            });
        }
    ).catch((error)=>{ 
        res.status(303).json({
            message: "Error occured " + error.message
        })
    });
});

export default router