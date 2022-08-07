import { useEffect, useState } from "react";
import "./HeroSlide.scss";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useHistory } from "react-router";

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const res = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(res.results?.slice(0, 4));
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return <div className="hero-slide">HeroSlide</div>;
};

export default HeroSlide;
