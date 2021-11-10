import React, { useEffect, useRef } from "react";
import "./champion-detail.scss";
import { closeIcon } from "../../../assets/images";

const ChampionDetail = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  const onClose = () => {
    document.querySelector(`#champ-detail-${props.id}`).classList.remove('active');
    iframeRef.current.setAttribute('src', '');

    const img = document.querySelector(`#champ-img-${props.id}`);
    img.style.opacity = 0;

    setTimeout(() => {
      img.remove()
    }, 500);
  }

  return (
    <div
      id={`champ-details-${props.id}`}
      className={`champion-details bg-image overlay ${
        props.active ? "active" : ""
      }`}
      style={{ backgroundImage: `url(${item.bgLarge})` }}
    >
      <div className="champion-detail__content">
        <span>{item.nickname}</span>
        <h2 className="name main-color">{item.name}</h2>
        <span>
          Role: <span className="second-color">{item.role}</span>
        </span>
        <span>
          Difficulty: <span className="second-color">{item.difficulty}</span>
        </span>
        <div className="story">{item.description}</div>
        <span>Champion Spotlight</span>
        <div className="video">
          <iframe
            title="champion spotlight"
            ref={iframeRef}
            width="100%"
          ></iframe>
        </div>
      </div>
      <div className="champion-detail__close" onClick={onClose}>
        <img src={closeIcon} alt="close" />
      </div>
    </div>
  );
};

export default ChampionDetail;