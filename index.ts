import express from "express";
import moviesController from "./Controllers/MoviesController";
import SeriesController from "./Controllers/SeriesController";
import MusicController from "./Controllers/MusicController"

const app = express();
const port = 5000;

app.use("/movies", moviesController);
app.use("/series", SeriesController);
app.use("/music", MusicController)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
