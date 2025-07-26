import axios from "axios";

const API_KEY = "a7efb589";
const BASE_URL = "https://www.omdbapi.com/";

const trendingTitles = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "John Wick",
  "The Dark Knight",
  "Avengers: Endgame",
  "Parasite",
  "Tenet",
  "Oppenheimer",
  "Dune"
];

export const fetchTrendingMovies = async () => {
  try {
    const moviePromises = trendingTitles.map((title) =>
      axios.get(BASE_URL, {
        params: {
          apikey: API_KEY,
          t: title
        }
      })
    );

    const responses = await Promise.all(moviePromises);
    return responses.map((res) => res.data);
  } catch (error) {
    console.error("Error fetching trending movies from OMDb:", error);
    return [];
  }
};
