import {Request,Response,NextFunction} from 'express'
import axios,{AxiosResponse} from 'axios'

interface Post{
    userId:Number;
    id:Number;
    title:String;
    body:String;
    username:String;
}

const getPosts=async(req:Request, res:Response,next:NextFunction)=>{
    let result:AxiosResponse =await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    let posts:[Post] = result.data;
    return res.status(200).json({
        message:posts
    })
}

const getPost=async(req:Request, res:Response, next:NextFunction)=>{
let id:string = req.params.id;
let result:AxiosResponse=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
let post:[Post] = result.data;
return res.status(200).json({
    message:post
})
}

const updatePost=async(req:Request, res:Response, next:NextFunction)=>{
    let id:string = req.params.id;
    //get the data from req.body
    let title:string=req.body.title??null;
    let body:string = req.body.body??null;
    let username:string = req.body.username??null;
    let response:AxiosResponse=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        ...(title&&{title}),
        ...(body&&{body}),
        ...(username&&{username})
    })
    return res.status(200).json({message:response.data})
}

const deletePost=async(req:Request, res:Response, next:NextFunction)=>{
    let id:string=req.params.id;
    let response:AxiosResponse=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.status(200).json({
        message:"Post Deleted Successfully"
    })
}

const addPost=async(req:Request,res:Response,next:NextFunction)=>{
    let title:string=req.body.title;
    let body:string=req.body.body;
    let username:string=req.body.username;
    let response:AxiosResponse=await axios.post(`https://jsonplaceholder.typicode.com/posts`,{
        title,
        body,
        username
    })
    return res.status(200).json({
        message:response.data
    })
}

export default{getPosts,getPost,updatePost,deletePost,addPost}