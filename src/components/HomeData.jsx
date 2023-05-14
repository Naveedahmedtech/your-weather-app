import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import cloud from "../assets/images/cloud.png";
import rainy from "../assets/images/rainy.png";
import sunny from "../assets/images/sunny.png";
import thinking from "../assets/images/thinking.png";
import { useState, useEffect } from "react";


const HomeData = ({ weatherData }) => {
  const [weatherImage, setWeatherImage] = useState(null);
  useEffect(() => {
    if (weatherData?.weather?.[0]?.main === "Rain") {
      setWeatherImage(rainy);
    } else if (weatherData?.weather?.[0]?.main === "Clouds") {
      setWeatherImage(cloud);
    } else if (weatherData?.weather?.[0]?.main === "Clear") {
      setWeatherImage(sunny);
    }
    else {
      setWeatherImage(thinking)
    }
  }, [weatherData]);
    return (
      <CardContent>
        <CardMedia
          component="img"
          sx={{ width: "100px", height: "100px", marginBottom: '20px' }}
          image={weatherImage && weatherImage}
          alt="Paella dish"
        />
        <Typography
          sx={{
            backgroundColor: "darkBlue",
            color: "white",
            textAlign: "center",
          }}
          p={1}
          gutterBottom
        >
          {weatherData?.weather?.[0]?.main ?? "n/A"}
        </Typography>
        <Typography
          sx={{
            backgroundColor: "purple",
            color: "white",
            textAlign: "center",
            margin: "15px 0",
          }}
          variant="h6"
          gutterBottom
        >
          Name: {weatherData?.name ?? "n/A"}
        </Typography>
      </CardContent>
    );
};
export default HomeData;
