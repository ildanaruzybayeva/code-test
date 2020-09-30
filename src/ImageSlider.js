import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./ImageSlider.style";

function ImageSlider({ image, goBack, goNext, currCount, maxCount }) {
  const classes = useStyles();
  return (
    <div className={classes.rootcontainer}>
      <Button onClick={goBack} className={classes.prevButton}>
        Back
      </Button>
      <img
        src={image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
        alt=""
      />
      <p className={classes.counter}>
        {currCount}/{maxCount}
      </p>
      <Button onClick={goNext} className={classes.nextButton}>
        Next
      </Button>
    </div>
  );
}

export default ImageSlider;
