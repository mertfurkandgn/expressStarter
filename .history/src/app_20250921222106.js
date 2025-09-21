import express from "express";
import cors from "cors";

const app = express();


app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials:true
    })
)
// common middleware 
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

//routes import 
import healthCheckRouter from './routes/healthcheck.routes.js'


//routes middleware

app.use('/api/v1/healthcheck/',(req,res,next)=>{
    console.log('geldi');
    res.status(200).send('hrllo')

});

app.listen(8000,()=>{
    console.log("app listening")
})

export {app};