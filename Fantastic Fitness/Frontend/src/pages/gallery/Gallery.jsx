import React from "react";
import "./gallery.css";
import HeaderImage from "../../Images/header_bg_3.jpg";
import Header from "../../components/Header";
import NavbarK from "../../components/Navbar.jsx"

function Gallery() {
	const galleryLength = 15;
	const images = [];
	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../Images/gallery${i}.jpg`));
	}
	// console.log(images); //Array of image/

	return (
		<>
			<NavbarK/>
			<Header title="Our Gallery" image={HeaderImage}>
				Have a look at the gallery of Fantastic Fitness!
			</Header>
			<section className="gallery section">
				<div className="containerK gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Gallery;
