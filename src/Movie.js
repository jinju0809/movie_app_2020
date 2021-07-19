import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//state가 필요 없으면 class component를 쓸 필요 없음
//function 쓴다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
        <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
        <h3 className="movie_title" style={{backgroundColor: "red"}}>{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

//id 34043
//우리가 얻어 올 props를 찾는다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
