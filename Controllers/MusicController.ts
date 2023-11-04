import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import Variables from "../variables";

const router = express.Router();

var spotifyApi = new SpotifyWebApi({
  clientId: Variables.clientId,
  clientSecret: Variables.clientSecret,
  redirectUri: "https://example.com/callback",
});

spotifyApi.clientCredentialsGrant().then(
  function (data: { body: { [x: string]: any; }; }) {
    spotifyApi.setAccessToken(data.body["access_token"]);
  },
  function (err: any) {
    console.log("Something went wrong when retrieving an access token", err);
  }
);

router.get("/albums/search/:query", async (req, res) => {
    const data = await spotifyApi.searchAlbums(req.params.query);
    var model = data.body.albums.items.map(function(a){
        return {
            "id": a.id,
            "name": a.name,
            "releaseDate": a.release_date,
            "totalTracks": a.total_tracks
        };
    });
    res.send(model);
})

router.get("/albums/:id", async (req, res) => {
    const data = await spotifyApi.getAlbum(req.params.id);
    res.send(data);
})

router.get("/test", async (req, res) => {
  const data = await spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE");
  res.send(data.body);
});

export default router;
