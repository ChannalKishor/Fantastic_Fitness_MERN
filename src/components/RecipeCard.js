import Customimg from "./customimg"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <Customimg imgsrc={recipe.image} pt="65%"/>
            {/* <img className="recipe-img" src={recipe.image} alt=""/> */}
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}