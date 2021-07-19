import React from 'react';


function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />

  </div>
}

//좋아하는 음식의 배열
const foodILike =[
  {
    name: "kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
  },
  {
    name:"삼겹살",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
  },
  {
    name:"비빔밥",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
  },
  {
    name:"주꾸미",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
  },
  {
    name:"김밥",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
  }
]


function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}/>
  //map은 언제나 array를 돌려줌
}

function App() {
  return (
    <div>
      <h1>Hello!!!!!</h1>
       {foodILike.map(renderFood)}
    </div>
  );
}

export default App;