import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [maxCount, setMaxCount] = useState(0);
  const [currCount, setCurrCount] = useState(0);

  const API_URL =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-9-27&api_key=7JPxXLG7jt4HrODSGLDRJvhVFYgle7bfn665ZpOc";

  const getPictures = () => {
    const result = fetch(API_URL)
      .then((res) => res.json())
      .then((res2) => {
        setData(res2.photos);
        setImage(res2.photos[0].img_src);
        setLoading(false);
        setMaxCount(res2.photos.length);
      });
    return result;
  };

  const goNext = (e) => {
    e.preventDefault();
    if (currCount < maxCount) {
      setCurrCount(currCount + 1);
      setImage(data[currCount].img_src);
    } else {
      setImage(data[0].img_src);
      setCurrCount(0);
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    if (currCount < 1) {
      setImage(data[0].img_src);
      setCurrCount(0);
    } else {
      setCurrCount(currCount - 1);
      setImage(data[currCount].img_src);
    }
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="Loading-screen">
          <p>loading</p>
        </div>
      ) : (
        <div>
          <ImageSlider
            image={image}
            goBack={goBack}
            goNext={goNext}
            currCount={currCount + 1}
            maxCount={maxCount}
          />
        </div>
      )}
    </div>
  );
}

export default App;
