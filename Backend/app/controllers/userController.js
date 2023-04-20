const User = require('../models/user')
const bcrypt = require("bcrypt");


var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/
var reg = /[a-z.]*[@]\bnortheastern.edu/
var user = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6,10}$/

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
        return hash;
}

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
    }

    
const register = async (req,res) =>{
    try{

        let username=req.body.username;
        let email=req.body.email;
        let password=req.body.password;

        let existingEmails = await User.find({email:email}).exec();
        if(existingEmails.length > 0){
            res.send({
                status:200,
                message:"Email id Already present"
            })  
        }
        else if(!reg.test(email)){
            res.send({
                status:200,
                message:"Invalid email id-please enter an email with @northeastern.edu"
            })    
        }

        else if(!user.test(username)){
            res.send({
                status:200,
                message:"Username must contain atleast one uppercase, one lowercase and length between 6 to 10"
            })
        }
        else if(!passwordReg.test(password)){
            res.send({
                status:200,
                message:"Password must contain at least a capital letter, at least a small letter, at least a number, at least a special character And minimum length of 8,12"
            })    
        }
        else {
            let hashedPassword = await hashPassword(password);
            let user = new User ({
                username:username,
                email:email,
                password:hashedPassword
            })
            user.save()
            .then(user =>{
                res.send({
                    status:"201",
                    message:"User Created Succesfully"
                })
            })
            .catch(error =>{
                res.send({
                    status:"200",
                    message:"An Error Occured"
                })
            })
        }
    }
    catch(err){
        console.log(err);
    }
}

const getAllUsers = async (req,res) =>{
    try{
        let users = await User.find({});
        if(users.length === 0){
            res.send({
                status:404,
                message:"No user in the database"
            })
        }
        else{
            res.send({
                status:200,
                message:"Users Retrived succesfully",
                data:users
            })
        }
    }
    catch(err){
        console.log(err);
    }
    }
    

const updateUsers = async(req,res) =>{
    try{

        let username=req.body.username;
        let email=req.params.email;
        let password=req.body.password;


        if(!reg.test(email)){
            res.send({
                status:200,
                message:"Invalid email id"
            })    
        }

        else if(!user.test(username)){
            res.send({
                status:200,
                message:"Username must contain atleast one uppercase, one lowercase and length between 6 to 10"
            })
        }
        else if(!passwordReg.test(password)){
            res.send({
                status:200,
                message:"Password must contain Should contain at least a capital letter Should contain at least a small letter Should contain at least a number Should contain at least a special character And minimum length of 8"
            })    
        }
        else {
            let hashedPassword = await hashPassword(password);
            const resposnce = await User.updateOne({ email: email},
                {
                    username:username,
                    password:hashedPassword
                })
                if(resposnce.matchedCount === 0 ){
                    res.send({
                        status:200,
                        message:"Email id Not present"
                    }) 
                }
                else if(resposnce.modifiedCount  === 1){
                    res.send({
                        status:200,
                        message:"User Updated Succesfully"
                    })
                }
        }
    }
    catch(err){
        console.log(err);
    }
}

const deleteUser = async(req,res) =>{
    try{
    let email = req.body.email;

    let existingEmails = await User.find({email:email}).exec();
    if(existingEmails.length  === 0 ){
        res.send({
            status:200,
            message:"email id not present"
        })  
    }
    else {
        let response = await User.deleteOne({ email: email});
        console.log(response)
        if(response.deletedCount === 1){
            res.send({
                status:200,
                message:"User Deleted succesfully"
            })
        }
        else{
            res.send({
                status:200,
                message:"A error Occured"
            })
        }
    }
}
    catch(err){
        console.log(err);
    }

}

const login = async(req,res) =>{
    try{
        let email = req.body.email;
        let username = req.body.username;
        let loginpassword = req.body.password;

        let existingUsers = await User.find({email:email }).exec();
        console.log(existingUsers);
        if(existingUsers.length === 0){
            res.send({
                status:200,
                message:"User not found",
                validate:false
            })
        }
        else {
            if(existingUsers[0].username===username && await comparePassword(loginpassword,existingUsers[0].password)){
                console.log(await comparePassword(loginpassword,existingUsers[0].password));
                res.send({
                    status:200,
                    message:"Login Success",
                    validate:true
                })
            }
            else{
                console.log(await comparePassword(loginpassword,existingUsers[0].password));
                res.send({
                    status:200,
                    message:"Invalid username or password",
                    validate:false
                })
            }
        }

    }

    catch(err){
        console.log(err);
    }
}

module.exports = {
    register,
    getAllUsers,
    updateUsers,
    deleteUser,
    login
}
