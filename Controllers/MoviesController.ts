import express from "express";
import { MovieDb } from "moviedb-promise";
import variables from "../variables";

const moviedb = new MovieDb(variables.apiKey);

const router = express.Router();

router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const response = await moviedb.searchMovie({ query: query });
  res.send(response);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await moviedb.movieInfo({ id: id });
  res.send(response);
});

export default router;
