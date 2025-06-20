import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';

const Body = () => {
  return (
    <div className="body">
      <div className="actions">
        <button className="search">
          <div>Search</div>
        </button>
        <button className="location">
          <div>Location</div>
        </button>
      </div>
      <div className="res-container">
        {resList.cards.map(resp => (
          <RestaurantCard
            key={resp.card.info.id}
            resData={resp.card}
          /> /* We have give a key(reserved keyword in js) whenever we are using map function.*/
        ))}
      </div>
    </div>
  );
};

export default Body;
