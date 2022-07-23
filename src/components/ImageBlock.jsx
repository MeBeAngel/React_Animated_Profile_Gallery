import React from "react";
import classes from "./ImageBlock.module.scss";

export default function ImageBlock(props) {
  return (
    <>
      <div className={classes.image_block} onClick={props.onClick}>
        {/* Profile Card Title Text */}
        <div className={classes.card_title}>{props.cardTitle}</div>
        {/* Profile Card Background Image */}
        <div className={classes.image_wrapper} style={{ backgroundImage: `url(${props.backgroundImage})` }} >
          {/* Animated Colored Overlay Over Background Image */}
          <div className={classes.image_overlay}></div>
        </div>
      </div>
    </>
  );
}
