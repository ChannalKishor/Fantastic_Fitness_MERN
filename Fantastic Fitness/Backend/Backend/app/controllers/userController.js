const User = require('../models/user')
var reg = /[a-z.]*[@]\bgmail.com/

    
const register = async (req,res) =>{
    try{

       
        let email=req.body.email;
        let recipeName=req.body.recipeName;
        let category=req.body.category;
        let ingredients=req.body.ingredients;
        let description=req.body.description;
        let image=req.body.image;


        let existingEmails = await User.find({email:email}).exec();
        if(existingEmails.length > 0){
            // res.send({
            //     status:200,
            //     message:"Email id Already present"
            // })  
        }
        else if(!reg.test(email)){
            res.send({
                status:200,
                message:"Invalid email id-please enter an email with @gmail.com"
            })    
        }         
        
        else {
           
            let user = new User ({
                email: email,        
                recipeName: recipeName,
                category: category,
                ingredients: ingredients,
                description: description,
                image: image
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

        let email=req.body.email;
        let recipeName=req.body.recipeName;
        let category=req.body.category;
        let ingredients=req.body.ingredients;
        let description=req.body.description;
        let image=req.body.image;


        if(!reg.test(email)){
            res.send({
                status:200,
                message:"Invalid email id"
            })    
        }

       
        else {
           
            const resposnce = await User.updateOne({ email: email},
                {
                    email: email,        
                    recipeName: recipeName,
                    category: category,
                    ingredients: ingredients,
                    description: description,
                    image: image
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

// const login = async(req,res) =>{
//     try{
//         let email = req.body.email;
//         let username = req.body.username;
//         let loginpassword = req.body.password;

//         let existingUsers = await User.find({email:email }).exec();
//         console.log(existingUsers);
//         if(existingUsers.length === 0){
//             res.send({
//                 status:200,
//                 message:"User not found",
//                 validate:false
//             })
//         }
//         else {
//             if(existingUsers[0].username===username && await comparePassword(loginpassword,existingUsers[0].password)){
//                 console.log(await comparePassword(loginpassword,existingUsers[0].password));
//                 res.send({
//                     status:200,
//                     message:"Login Success",
//                     validate:true
//                 })
//             }
//             else{
//                 console.log(await comparePassword(loginpassword,existingUsers[0].password));
//                 res.send({
//                     status:200,
//                     message:"Invalid username or password",
//                     validate:false
//                 })
//             }
//         }

//     }

//     catch(err){
//         console.log(err);
//     }
// }

module.exports = {
    register,
    getAllUsers,
    updateUsers,
    deleteUser,
    
}
