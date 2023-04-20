import Navbar from "./Navbar"
import Customimg from "./customimg"
import "../styles/css/_hero-section.css"
// import "../styles/css/_navbar.css"
export default function HeroSection(){

    const images = [
        "/img/gallery/img_1.webp",
        "/img/gallery/img_2.webp",
        "/img/gallery/img_3.webp",
        "/img/gallery/img_4.webp",
        "/img/gallery/img_5.webp",
        "/img/gallery/img_6.webp",
        "/img/gallery/img_7.webp",
        "/img/gallery/img_8.webp",
        "/img/gallery/img_9.webp",

    ]

 

    return(
        <div className="section hero">
            <Navbar />
            <div className="col typography">
                <h1 className="title">Recipes created just for you</h1>
                <p className="infor">Try our best and tasty recipes made for you </p>
                <button class="btn" >explore now</button>

            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <Customimg key={index} imgsrc= {src} pt={"85%"}/>
                ))}
                
               
            </div>
        </div>
    )

    
}