import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Grid
      flexDirection="column"
      height="100vh"
      spacing={4}
      alignContent="center"
      alignSelf="center"
      textAlign="center"
      justifyContent="center"
    >
      <h1>Ai sẽ làm bài?</h1>
      <Grid
        container
        spacing={4}
        alignContent={"center"}
        alignSelf={"center"}
        justifyContent="center"
      >
        <Card
          style={{
            width: "300px",
          }}
        >
          <a href="/practice?assignee=Hieu">
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/hieu.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Trần Phúc Hiếu
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
        <Card
          style={{
            width: "300px",
          }}
        >
          <a href="/practice?assignee=Hieu">
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/nghia.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Trần Nhân Nghĩa
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
};
