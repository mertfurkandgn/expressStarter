import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";


const router = Router();
console.log('girdiiii')

router.route('/').get((healthCheck))

export default router