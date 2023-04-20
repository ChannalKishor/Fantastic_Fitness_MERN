import { userLoginService } from "../Services/userService";

export const userLogin = async(email,recipeName,category,ingredients,description,image) =>{
    console.log('Received', email,recipeName,category,ingredients,description,image);

    let body = {
        email: email,        
        recipeName: recipeName,
        category: category,
        ingredients: ingredients,
        description: description,
        image: image
    };
    

    let respnd = await userLoginService(body);
    console.log(respnd)

    return respnd;
}
