import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>Rating {rating}/5.0</h3>
      <img src={picture} alt={name} />
    </div>
  );
}
Food.propTypes = {
  //props에 대한 설명
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

//좋아하는 음식의 배열
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    
  },
  {
    id: 2,
    name: "삼겹살",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "비빔밥",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 3.4,
  },
  {
    id: 4,
    name: "주꾸미",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 4.3,
  },
  {
    id: 5,
    name: "김밥",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 3.5,
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
