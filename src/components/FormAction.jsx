// FormAction.js
import { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import AdditionInfo from "./AdditionInfo";
import HomeData from "./HomeData";
import fetchWeatherData from "../api";
import CircularProgress from "@mui/joy/CircularProgress";

const FormAction = () => {
  const [city, setCity] = useState("Pakistan");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const submitWeather = async (e) => {
    e.preventDefault();

    if (city === "") {
      alert("Please enter a city or country name");
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      setIsError(true);
      setError(error.message);
    } finally {
      setIsLoading(false);
      setCity("");
      e.target.reset();
      e.target[0].blur();
    }
  };

  useEffect(() => {
    submitWeather({ preventDefault: () => {} });
  }, []);

  return (
    <Card
      sx={{
        width: "100%",
        minWidth: "200px",
        padding: "20px 30px",
      }}
    >
      <CardContent>
        <Typography color="secondary" variant="h3" gutterBottom>
          Your Weather App
        </Typography>
      </CardContent>
      <form method="POST" onSubmit={submitWeather}>
        <CardActions>
          <TextField
            id="outlined-basic"
            label="Search the current weather here...."
            fullWidth
            variant="outlined"
            value={city}
            error={isError}
            helperText={isError ? error : ""}
            onChange={(e) => setCity(e.target.value)}
          />
        </CardActions>
        <CardActions>
          <Button
            fullWidth
            variant={isLoading ? "outlined" : "contained"}
            type="submit"
          >
            {isLoading ? (
              <CircularProgress
                color="primary"
                determinate={false}
                size="sm"
                value={30}
                variant="plain"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </CardActions>
      </form>

      <HomeData weatherData={weatherData} />
      <AdditionInfo weatherData={weatherData} />
    </Card>
  );
};

export default FormAction;
