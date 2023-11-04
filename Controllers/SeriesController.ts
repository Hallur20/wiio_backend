import express from "express";
import { MovieDb } from "moviedb-promise";
import variables from "../variables";
import {ToModel} from "../Models/MediaResults"

const moviedb = new MovieDb(variables.apiKey);
const router = express.Router();

router.get("/search/:query", async (req, res) => {
  const query = req.params.query;
  const page = req.query.page ?? 1;
  const response = await moviedb.searchTv({ query: query, page: page as number  });
  res.send(ToModel(response));
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await moviedb.tvInfo({ id: id });
  res.send(response);
});

export default router;
