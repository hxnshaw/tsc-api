import express,{Express} from 'express';
import morgan from 'morgan'
import routes from './routes/posts'

const router:Express=express();

router.use(morgan('dev'))
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.use('/',routes)

//Error handling
router.use((req,res,next)=>{
const error=new Error('Not Found');
return res.status(404).json({
    message:error.message
})
})
 

router.listen(3000,()=>{
    console.log("App is listening on port 3000");
    
})   