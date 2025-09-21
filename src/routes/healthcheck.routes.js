import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";


const router = Router();
console.log('girdiiii')

router.route('/').get((req,res,next)=>{
    console.log("Request geldi: /");
    healthCheck(req,res,next);
})

export default router