import { userLoginService } from "../Services/userService";

export const userLogin = async(userName,email,password) =>{
    console.log('Received', userName,email,password);

    let body = {
        email:email,
        username:userName,
        password:password
    }

    let respnd = await userLoginService(body);
    console.log(respnd)

    return respnd;
}
