import { useState, useEffect } from "react";
import images from "../../../../assets/images";

export function Carousel() {
  const sliderImages = Object.values(images.slider);
  const [imgSrc, setImgSrc] = useState(sliderImages[0]);
  let i = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (i > sliderImages.length - 1) i = 0;
      setImgSrc(() => sliderImages[i]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="sm-main-carousel">
      <div className="sm-main-img-container">
        <img id="sm-main-image" src={imgSrc} alt="badminton" />
      </div>
      <div className="sm-main-carousel-btn sm-grid-content">
        <h1 className="main-heading color-p">Badminton Deals</h1>
        <h2 className="sub-main-heading color-p">Starting At ₹1299/-</h2>
        <button
          id="carousel-btn"
          className="shop-now-hover btn btn-primary btn-bold"
          title="CheckOut Product Listings"
        >
          <i className="fab fa-opencart"></i>
          Shop Now
        </button>
      </div>
    </div>
  );
}
