
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { userLogin } from "../Actions/userAction";
import "../styles/css/_LoginPage.css"
import Navbar from "../components/Navbar";


export default function LoginPage({...props}){  
    
    const [email, setEmail] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
   
    // console.log(email);
    // const navigate = useNavigate();

    function ConvertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload= () => {
            console.log(reader.result);
            setImage(reader.result);
        };
        reader.onerror= error => {
            console.log("Error: ", error);

        };
    }

    const handleSubmit = async(e) => {        
        e.preventDefault();
   userLogin(email,recipeName,category,ingredients,description,image)
    .then((res) => {
        console.log(res)
        if(res.data.validate){
            props.handle();
            // navigate('/')
           }
        else{
            alert('Recipe Submitted Sucessfully', res.message);
           }
    }).catch((error) => {
        console.log(error)
    });
    }
    return(
        <div className="login-page">
            <Navbar />
            <h1>Recipe Submit</h1>
            <form className="box">
                <label>
                    Email:
                    <input type="text" className="recipe-input" onChange={(event)=>{setEmail(event.target.value)}} required/>
                </label>
                <br/>
                <label>
                    Recipe Name:
                    <input type="text" className="recipe-input" onChange={(event)=>{setRecipeName(event.target.value)}} required/>
                </label>
                <br/>
                <label>
                    Category:
                    <select class="recipe-input" onChange={(event) => setCategory(event.target.value)}>
                    <option value="">Select category</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Vegan">Vegan</option>
                    </select>
                </label>
                <br/>
                
                <label>
                    Ingredients:
                    <textarea className="recipe-textarea" onChange={(event)=>{setIngredients(event.target.value)}} required/>
                </label>
                <br/>
                <label>
                    Description:
                    <textarea className="recipe-textarea" onChange={(event)=>{setDescription(event.target.value)}} required/>
                </label>
                <br/>
                <label>
                    Image:
                    <input type="file" className="recipe-input" accept="image/*" onChange={ConvertToBase64} />
                </label>
                    {image && <img src={image} alt="Preview" className="recipe-image-preview" />}
                <br/>
                <button type="submit" className="recipe-submit-button" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { userLogin } from "../Actions/userAction";

// export default function RecipeForm({...props}){
//     const [email, setEmail] = useState('');
//     const [recipeName, setRecipeName] = useState('');
//     const [category, setCategory] = useState('');
//     const [ingredients, setIngredients] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();

//     const handleImageChange = (event) => {
//         setImage(URL.createObjectURL(event.target.files[0]));
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         // Submit the recipe form
//         console.log("Recipe form submitted!");
//     }

//     return(
//         <div className="recipe-form">
//             <h1>Recipe Form</h1>
//             <form className="box">
//                 <label>
//                     Email:
//                     <input type="text" className="recipe-input" onChange={(event)=>{setEmail(event.target.value)}}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Recipe Name:
//                     <input type="text" className="recipe-input" onChange={(event)=>{setRecipeName(event.target.value)}} />
//                 </label>
//                 <br/>
//                 <label>
//                     Category:
//                     <input type="text" className="recipe-input" onChange={(event)=>{setCategory(event.target.value)}} />
//                 </label>
//                 <br/>
//                 <label>
//                     Ingredients:
//                     <textarea className="recipe-input" onChange={(event)=>{setIngredients(event.target.value)}} />
//                 </label>
//                 <br/>
//                 <label>
//                     Description:
//                     <textarea className="recipe-input" onChange={(event)=>{setDescription(event.target.value)}} />
//                 </label>
//                 <br/>
//                 <label>
//                     Image:
//                     <input type="file" className="recipe-input" accept="image/*" onChange={handleImageChange} />
//                 </label>
//                 {image && <img src={image} alt="Preview" className="recipe-image-preview" />}
//                 <br/>
//                 <button type="submit" className="recipe-submit-button" onClick={(e)=>handleSubmit(e)}>Submit</button>
//             </form>
//         </div>
//     )
// }
