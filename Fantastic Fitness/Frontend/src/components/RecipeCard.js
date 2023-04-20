import Customimg from "./customimg"
import "../styles/css/_recipe-section.css"

// export default function RecipeCard({recipe}){
//     return (
//         <div className="recipe-card">
//             <Customimg imgsrc={recipe.image} pt="65%"/>
//             {/* <img className="recipe-img" src={recipe.image} alt=""/> */}
//             <div className="recipe-card-info">
//                 <img className="auther-img" src={recipe.authorImg} alt=""/>
//                 <p className="recipe-title">{recipe.title}</p>
//                 <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <a className="view-btn" href="https://www.youtube.com/watch?v=gjJ99pmiM1o">VIEW RECIPE</a>
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState} from "react";

export default function Settings({userData}) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/Recipe/getAll",
    {method: "GET",
    }) // replace with the URL of your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "userData");  
        setData(data.data);    
      })
      
  }, []);
   

  return (
            <div>
    
    <div className="recipe-card">
        {data.map((recipe) => (
        <div className="card" key={recipe._id}  style={{width: "50%", marginLeft: "25%"}}>           
            <Customimg imgsrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p><strong>Email:</strong> {recipe.email}</p>
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Description:</strong> {recipe.description}</p>
            </div>
            </div>
        
        ))}
    </div>
    </div>

  );


}
