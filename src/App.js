import React from 'react';
import PropTypes from 'prop-types';



const foodILike = [
  {
    id: 1,
    name: 'bulgogi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fadmin.cjrecipe.com%2Fimages%2FtheKitchen%2FPHON%2F0000000814%2F0000001206%2F0000000814.jpg&f=1&nofb=1',
    rating: 1
  },
  {
    id: 2,
    name: 'chicken',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewsimg.hankookilbo.com%2Fcms%2Farticlerelease%2F2020%2F06%2F26%2F0b43d99d-2c25-40fc-99cb-4aa16a0eec4b.png%3Ft%3D20200723182449&f=1&nofb=1',
    rating: 2
  },
  {
    id: 3,
    name: 'bagel',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-cf.kurly.com%2Fshop%2Fdata%2Fgoodsview%2F20170613%2Fgv40000003992_1.jpg&f=1&nofb=1',
    rating: 3
  },
  {
    id: 4,
    name: 'donut',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fsiksin%2Fae6b3e59c32849a7ad84870c69e57680.JPG&f=1&nofb=1',
    rating: 4
  },
  {
    id: 5,
    name: 'tteokbokki',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.011st.com%2F11dims%2Fresize%2F600x600%2Fquality%2F75%2F11src%2Fdl%2F20%2F2%2F1%2F4%2F7%2F6%2F8%2FibzAW%2F2759214768_133409220.jpg&f=1&nofb=1',
    rating: 5
  }
];


function Food({name, picture, rating}) {
  return(
    <div>
      <h2>I LOVE {name}.</h2>
      <h5>{rating}/5.0</h5>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <p>hello</p>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
