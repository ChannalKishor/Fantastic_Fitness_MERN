import Customimg from "./customimg"
export default function HeroSection(){

    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",

    ]

    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Diet plans best for you</h1>
                <p className="infor">Best recipes made for you </p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <Customimg key={index} imgsrc= {src} pt={"85%"}/>
                ))}
                
               
            </div>
        </div>
    )

    
}