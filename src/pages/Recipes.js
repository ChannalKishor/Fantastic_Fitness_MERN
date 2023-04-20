import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Quina Salad",
            image: "/img/gallery/img_1.webp",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Healthiest Spaghetti",
            image: "/img/gallery/img_9.webp",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "Protein Rich Salad",
            image: "/img/gallery/img_2.webp",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Avacado Meat Fusion",
            image: "/img/gallery/img_3.webp",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "200 Calories Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti within 100 Calories",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "50 Calories Cookie",
            image: "/img/gallery/img_6.webp",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "60g Protein Chicken ",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chiefs/img_5.jpg",
        },
        {
            title: "Cabbage Soup",
            image: "/img/gallery/img_8.webp",
            authorImg: "/img/top-chiefs/img_6.jpg",
        },
        {
            title: "100 Calories Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
        {
            title: "Chickpea Salad",
            image: "/img/gallery/img_7.webp",
            authorImg: "/img/top-chiefs/img_5.jpg",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}