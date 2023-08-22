// styles
import "./ShopInfo.css";
// images
import BoyImg from "../../assets/png/boy-img.png";

function ShopInfo() {
  return (
    <section className="shop-info">
      <div className="container shop-info__container">
        <div className="shop-info__content">
          <h1 className="shop-info__title">
            Bringing you the <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={BoyImg} alt="Boy in headphones" />
      </div>
    </section>
  );
}

export default ShopInfo;
