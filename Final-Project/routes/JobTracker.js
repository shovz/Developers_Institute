import express from "express";
import { getUsers ,signIn,register,signOut} from "../controllers/Users.js";
import {getUserId,getApplied,getHr,getTechincal,getOffer,getLogs,saveJobInfo} from "../controllers/ApplicationInfo.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();


router.get('/',getUsers);
router.post('/register', register);
router.post('/signIn', signIn);
router.delete('/signOut', signOut);


router.get('/dashboard',getUserId);
router.get('/getLogs',getLogs);
router.post('/saveJobInfo',saveJobInfo);
router.get('/Applied',getApplied);
router.get('/Hr',getHr);
router.get('/Techincal',getTechincal);
router.get('/Offer',getOffer);



router.get('/verify', VerifyToken, (req,res) =>{
    res.sendStatus(200);
  })
export default router;