import express from "express";
import { getUsers ,signIn,register,signOut} from "../controllers/Users.js";
import { VerifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();


router.get('/',getUsers);
router.post('/register', register);
router.post('/signIn', signIn);
router.delete('/signOut', signOut);
router.get('/verify', VerifyToken, (req,res) =>{
    res.sendStatus(200);
  })
export default router;