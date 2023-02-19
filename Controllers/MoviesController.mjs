import express from 'express';
import dotenv from 'dotenv'
import {MovieDb}   from 'moviedb-promise'
dotenv.config();
const moviedb = new MovieDb(process.env.TMDB_APIKEY);
const router = express.Router();

router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const response = await moviedb.searchMovie({ query: query })
  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await moviedb.movieInfo({ id: id })
  res.send(response);
});

/*router.get("/:id/providers", async (req, res) => {
  const id = req.params.id;
  const response = await moviedb.movieWatchProviderList({ id: id, language: 'DK' })
  res.send(response);
});*/

export default router;