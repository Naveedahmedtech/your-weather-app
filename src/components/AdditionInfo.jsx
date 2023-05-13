import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const AdditionInfo = ({ weatherData }) => {
  return (
    <>
      <Card style={{ margin: "20px", padding: '0 5px', overflow: 'auto' }}>
        <CardContent>
          <Typography color="secondary" gutterBottom>
            Addtional Info
          </Typography>
          <Typography gutterBottom>
            Description: &nbsp;
            <Typography variant="small" color="primary">
              {weatherData?.weather?.[0]?.description ?? "n/A"}
            </Typography>
          </Typography>
          <main
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Typography gutterBottom>
                Wind:&nbsp;
                <Typography variant="small" color="primary">
                  {weatherData?.wind?.speed ?? "n/A"}
                </Typography>
              </Typography>
              <Typography gutterBottom>
                Pressure:&nbsp;
                <Typography variant="small" color="primary">
                  {weatherData?.main?.pressure ?? "n/A"}
                </Typography>
              </Typography>
            </div>
            <div>
              <Typography gutterBottom>
                Temperature:&nbsp;
                <Typography variant="small" color="primary">
                  {weatherData?.main?.temp ?? "n/A"}
                </Typography>
              </Typography>
              <Typography gutterBottom>
                Humidity:&nbsp;
                <Typography variant="small" color="primary">
                  {weatherData?.main?.humidity ?? "n/A"}
                </Typography>
              </Typography>
            </div>
          </main>
        </CardContent>
      </Card>
    </>
  );
};

export default AdditionInfo;
