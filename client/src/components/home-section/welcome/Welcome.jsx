import React from "react";
import "./welcome.scss";
import HomeSection from "../HomeSection";
import { bg1 } from '../../../assets/images'

const Welcome = (props) => {

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
                  Team up with friends and test your skills in a 5v5 MOBA (Multiplayer online battle arena) combat.  All the high-skiled competition you crave, designed especially for mobile and console with revamped controls and streamlined matched.  Explore the living universe of Runeterra through lore, comics, games, and more.  Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
              </div>
              <div className="btns m-t-4">
                  <button>PLAY NOW</button>
                  <button>GET STARTED</button>
              </div>
          </div>
          <div className="welcome__img relative">
              <img src="" alt="" />
          </div>
      </HomeSection>
    </div>
  );
};

export default Welcome;
