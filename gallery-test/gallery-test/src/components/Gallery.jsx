import React, { useEffect, useState } from "react";
import { getImgs } from "../data.getways";
import ImgsList from "./ImgsList";
const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    if (!galleryData.length) {
      getImgs().then((data) => setGalleryData(data));
    }
  });

  return (
    <>
      <div className="gallery_container">
        <ImgsList data={galleryData} />
        <footer className="footer">
          <span className="footer_text">© 2018-2019</span>
        </footer>
      </div>
    </>
  );
};
export default Gallery;
