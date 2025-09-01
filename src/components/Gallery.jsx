import React from "react";

const images = [
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCDjm8sXBlx1rCZLkDALvz7x6wljnCjoA-v-ZIC_70DdVu9Tmq",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRvsbIPwhmTCstdjeDYqUUcXJchwh_icFSrKdUIFXfTIGl8y6gi",
  "https://portal.wiktrop.org/files-api/api/get/crop/img//Pistia%20stratiotes/piist_20060921_102345.jpg?h=500",
  "https://i.pinimg.com/564x/3f/30/80/3f30807e92257e0c6fba6a468933f4b0.jpg"
];

function Gallery() {
  return (
    <section className="image-gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Water Hyacinth Species ${index + 1}`} />
      ))}
    </section>
  );
}

export default Gallery;
