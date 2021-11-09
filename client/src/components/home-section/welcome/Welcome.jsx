import React, { useEffect } from "react";
import "./welcome.scss";
import HomeSection from "../HomeSection";
import Button from "../../button/Button";
import {
  bg1,
  champAhri,
  champAshe,
  champGaren,
  distortion,
} from "../../../assets/images";
import hoverEffect from "hover-effect";

const champImages = [champGaren, champAshe, champAhri];

const Welcome = (props) => {
  useEffect(() => {
    const welcomeImages = document.querySelectorAll(
      "#welcome__img__slide > img"
    );
    let animates = [];
    welcomeImages.forEach((item, index) => {
      let nextImage =
        welcomeImages[
          index === welcomeImages.length - 1 ? 0 : index + 1
        ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImage,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImages.forEach((event) => event.remove());

    let currentItem = 0;
    const autoImageSlide = () => {
      let previousItem = currentItem;
      currentItem = (currentItem + 1) % animates.length;
      if (!document.hidden) {
        animates[previousItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[previousItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <div>
      <HomeSection
        className={`welcome ${props.isActive ? "active" : ""}`}
        contentClassName="overlay welcome__content"
        bgImage={bg1}
      >
        <div className="welcome__info relative">
          <div className="title">
            <span>Welcome to</span>
            <h2 className="main-color">Sumnoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Team up with friends and test your skills in a 5v5 MOBA (Multiplayer
            online battle arena) combat. All the high-skiled competition you
            crave, designed especially for mobile and console with revamped
            controls and streamlined matched. Explore the living universe of
            Runeterra through lore, comics, games, and more. Then dive into the
            community of gamers, cosplayers, musicians, and content creators who
            are waiting for you to join them.
          </div>
          <div className="btns m-t-4">
            <Button className="btn-main">PLAY NOW</Button>
            <Button className="btn-second">GET STARTED</Button>
          </div>
        </div>
        <div className="welcome__img relative">
          <div className="welcome__img__slide" id="welcome__img__slide">
            {champImages.map((item, index) => (
              <img key={index} src={item} alt="" />
            ))}
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

export default Welcome;
