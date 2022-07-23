import React, { useState } from "react";
import classes from "./ProfileGallery.module.scss";

//Component Imports
import ImageBlock from "./ImageBlock";

// Image Imports
import Developer from "../images/developer.jpg";
import Developer2 from "../images/developer2.jpg";
import Designer from "../images/designer.jpg";
import Marketer from "../images/marketer.jpg";

export default function ProfileGallery() {

// Hold State For Each Profile Card Type //
  const [visible, setVisible] = useState({
    all: true,
    developer: true,
    designer: true,
    marketer: true
  });

// Handle State Change Logic When "All" Is Clicked //
// Shows All Profile Cards //
const allClick = () => {
  setVisible({
    all: true,
    developer: true,
    designer: true,
    marketer: true
  });
}

// Handle State Change Logic When "Developer" Is Clicked //
// Shows Only Developer Profile Cards And Hides The Rest //
const developerClick = () => {
  setVisible({
    all: false,
    developer: true,
    designer: false,
    marketer: false
  });
}

// Handle State Change Logic When "Designer" Is Clicked //
// Shows Only Designer Profile Cards And Hides The Rest //
const designerClick = () => {
  setVisible({
    all: false,
    developer: false,
    designer: true,
    marketer: false
  });
}

// Handle State Change Logic When "Marketer" Is Clicked //
// Shows Only Marketer Profile Cards And Hides The Rest //
const marketerClick = () => {
  setVisible({
    all: false,
    developer: false,
    designer: false,
    marketer: true
  });
}

  return (
    <div className={classes.gallery_wrapper}>
{/* Gallery Menu */}
      <div className={classes.gallery_menu}>
        <span className={visible.all && classes.active} onClick={allClick}> All </span>
        <span className={visible.developer && visible.all === false && classes.active} onClick={developerClick}> Developer </span>
        <span className={visible.designer && visible.all === false && classes.active} onClick={designerClick}> Designer </span>
        <span className={visible.marketer && visible.all === false && classes.active} onClick={marketerClick}> Marketer </span>
      </div>

{/* Gallery Profiles */}
      <div className={classes.profile_gallery}>
        {visible.developer && <ImageBlock cardTitle="Web Developer" backgroundImage={Developer} /> }
        {visible.developer && <ImageBlock cardTitle="Java Developer" backgroundImage={Developer2} /> }
        {visible.designer && <ImageBlock cardTitle="Graphic Designer" backgroundImage={Designer} /> }
        {visible.marketer && <ImageBlock cardTitle="Marketer" backgroundImage={Marketer} /> }
      </div>
    </div>
  );
}
