import express,{Request,Response} from 'express'

const app = express()

app.use(express.json())

//app.use(express.urlencoded({extended:true}))

app.get('/',(req:Request, res:Response) =>  {
    return res.send("Hello world")
})
 

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
    
})   