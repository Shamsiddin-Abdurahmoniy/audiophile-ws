// styles
import "./Home.css";
// images
import headphoneOneImg from "../../assets/svg/headphone1-img.svg";
import speakerImg from "../../assets/svg/speaker-img.svg";
import sectionFourImg from "../../assets/svg/section-four-img.svg";
// components
import MenuList from "../../components/menu/MenuList";
import ShopInfo from "../../components/shopInfo/ShopInfo";
function Home() {
  return (
    <>
      <section className="section-one">
        <div className="container section-one__container section-flex">
          <div className="section-one__content">
            <p className="section-one__subtitle">NEW PRODUCT</p>
            <h1>XX99 Mark II Headphones</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn">see product</button>
          </div>
          <img
            className="section-one__img"
            src={headphoneOneImg}
            alt="headphone image"
            width="709"
            height="886"
          />
        </div>
      </section>
      {<MenuList />}
      <section className="section-two">
        <div className="container section-two__container section-flex">
          {/* <img src={speakerImg} alt="speaker image" /> */}
          <div className="section-two__content">
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn">see product</button>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className=" section-three__container container">
          <div className="section-three__content">
            <h1>ZX7 SPEAKER</h1>
            <button className="btn">see product</button>
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="container section-four__container">
          <img src={sectionFourImg} alt="section four image" />
          <div className="section-four__content">
            <h1>YX1 EARPHONES</h1>
            <button className="btn">see product</button>
          </div>
        </div>
      </section>
      <ShopInfo />
    </>
  );
}

export default Home;
