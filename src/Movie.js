import React from "react";
import PropTypes from "prop-types";

//state가 필요 없으면 class component를 쓸 필요 없음
//function 쓴다.
function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>;
}

//id 34043
//우리가 얻어 올 props를 찾는다.
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    
};
export default Movie;