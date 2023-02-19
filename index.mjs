import express from "express";
import dotenv from 'dotenv'
import moviesController from  './Controllers/MoviesController.mjs'
import SeriesController from  './Controllers/SeriesController.mjs'

dotenv.config();

const app = express();
const port = 5000;

app.use('/movies', moviesController)
app.use('/series', SeriesController)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
