import dotenv from "dotenv";
dotenv.config();

if (process.env.TMDB_APIKEY == undefined) {
  throw new Error("apikey not found");
}
export default { apiKey: process.env.TMDB_APIKEY };
