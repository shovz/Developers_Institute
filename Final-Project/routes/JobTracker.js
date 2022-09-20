import express from "express";
import { getProfile ,signIn,register,signOut,delUser} from "../controllers/Users.js";
<<<<<<< HEAD
import {getUserId,getApplicationLogs,sortedByStage
  ,saveJobInfo,deleteJobApp} from "../controllers/ApplicationInfo.js";
=======
import {getUserId,getApplied,getHr,getTechnical,getOffer,getApplicationLogs,saveJobInfo} from "../controllers/ApplicationInfo.js";
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
import { VerifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.post('/delUser', delUser);
router.post('/register', register);
router.post('/signIn', signIn);
router.delete('/signOut', signOut);
router.post('/profile',getProfile);
<<<<<<< HEAD
router.post('/deleteJobApp',deleteJobApp);
=======


>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
router.get('/dashboard',getUserId);
router.post('/getApplicationLogs',getApplicationLogs);
router.post('/saveJobInfo',saveJobInfo);
router.post('/sortedByStage',sortedByStage);


router.get('/verify', VerifyToken, (req,res) =>{
    res.sendStatus(200);
  })
export default router;