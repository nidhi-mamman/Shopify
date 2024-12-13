const express=require("express")

const {signUp,signIn,getUser}=require('../controllers/user')
const authMiddleware=require('../middleware/authmiddleware')

const router=express.Router()

router.post('/signup',signUp)
router.post('/signin',signIn)
router.get('/user',authMiddleware,getUser)

module.exports=router