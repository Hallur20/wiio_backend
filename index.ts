import express from "express";
import dotenv from "dotenv";
import moviesController from "./Controllers/MoviesController";
import SeriesController from "./Controllers/SeriesController";
import SpotifyWebApi from "spotify-web-api-node";
import Variables from "./variables";

const app = express();
const port = 5000;

app.use("/movies", moviesController);
app.use("/series", SeriesController);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//nts: token expires in 3600.
var spotifyApi = new SpotifyWebApi({
  clientId: Variables.clientId,
  clientSecret: Variables.clientSecret,
  redirectUri: "https://example.com/callback",
});

spotifyApi.setAccessToken(Variables.accessToken);

app.get("/spotifyTest", async (req, res) => {
  // Get Elvis' albums
  const data = await spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE");
  res.send(data.body);
});

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
