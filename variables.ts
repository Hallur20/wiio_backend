import dotenv from "dotenv";
dotenv.config();

if (process.env.TMDB_APIKEY == undefined) {
  throw new Error("apikey not found");
}
export default { 
  apiKey: process.env.TMDB_APIKEY,
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  accessToken: process.env.SPOTIFY_ACCESS_TOKEN,
 };
