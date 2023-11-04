import { MovieResultsResponse, TvResultsResponse } from "moviedb-promise";

class MediaResultsModel {
  page?: number;
  resultsCount?: number;
  pagesCount?: number;
  results: Array<MediaResult>;
}

class MediaResult {
  id?: number;
  releaseAt?: string;
  mediaType: string;
  title?: string;
  originalTitle?: string;
  description?: string;
  genreIds?: Array<number>;
  rating?: number;
}

export const ToModel = (response: MovieResultsResponse | TvResultsResponse) => {
  var model = new MediaResultsModel();
  model.page = response.page;
  model.resultsCount = response.total_results;
  model.pagesCount = response.total_pages;

  model.results = response.results.map(
    (r: {
      id: any;
      release_date: any;
      media_type: any;
      title: any;
      popularity: any;
      overview: any;
      genre_ids: any;
      vote_average: any;
      first_air_date: any;
    }) =>
      ({
        id: r.id,
        releaseAt: r.release_date ?? r.first_air_date,
        mediaType: r.media_type,
        title: r.title,
        popularity: r.popularity,
        description: r.overview,
        genreIds: r.genre_ids,
        rating: r.vote_average,
      } as MediaResult)
  );

  return model;
};
