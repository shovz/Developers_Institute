import express from "express";
import { getProfile ,signIn,register,signOut,delUser} from "../controllers/Users.js";
import {getUserId,getApplicationLogs,getAllActiveJobApp
  ,saveJobInfo,deleteJobApp} from "../controllers/ApplicationInfo.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.post('/delUser', delUser);
router.post('/register', register);
router.post('/signIn', signIn);
router.delete('/signOut', signOut);
router.post('/profile',getProfile);
router.post('/deleteJobApp',deleteJobApp);
router.get('/dashboard',getUserId);
router.post('/getApplicationLogs',getApplicationLogs);
router.post('/saveJobInfo',saveJobInfo);
router.post('/getAllActiveJobApp',getAllActiveJobApp);

router.get('/verify', VerifyToken, (req,res) =>{
    res.sendStatus(200);
  })
export default router;