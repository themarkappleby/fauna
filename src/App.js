import './App.css';
import cards from './cards';
// import snap from './cards-snap';

/*
const output = {
  locations: snap.locations.map((location, index) => {
    return {...location, title: cards.locations[index].title}
  }),
  characters: snap.characters.map((character, index) => {
    return {
      ...character,
      title: cards.characters[index].title,
      description: cards.characters[index].description,
    }
  }),
}
*/

const Flag = ({ active, position }) => {
  return (
    <div className={`flag ${position}`}>
      {active}
      {/* <div className={`flag-item ${active === 'left' ? 'active' : ''}`} />
      <div className={`flag-item ${active === 'middle' ? 'active' : ''}`} />
      <div className={`flag-item ${active === 'right' ? 'active' : ''}`} /> */}
    </div>
  )
}

// Ref https://stackoverflow.com/a/2450976/918060
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function App() {
  return (
    <div className="cards">
      {cards.characters.map(card => {
        const activeOrder = ['left', 'middle', 'right']
        shuffle(activeOrder);
        return (
          <div className="card" key={card.title}>
              <Flag position="left" active={activeOrder[0]} />
              <Flag position="middle" active={activeOrder[1]} />
              <Flag position="right" active={activeOrder[2]} />
              <div className="card-info">
                <div className="card-title">
                  {card.title}
                </div>
                <div className="card-ability">
                    {card.trigger && <strong>{card.trigger}: </strong>}{card.ability}{card.ability && '.'}
                </div>
                <div className="card-desc">
                  {card.description}
                </div>
              </div>
              <div className="card-power">
                {card.power}
              </div>
              <div className="card-cost">
                {card.cost}
              </div>
              <div className="card-image" />
          </div>
        )
      })}
      {cards.locations.map(location => {
        return (
          <div className="card location" key={location.title}>
            <div className="location-info top">
              <div className="location-title">
                {location.title}
              </div>
              <div className="location-ability">
                {location.ability}
              </div>
            </div>
            <div className="location-info bottom">
              <div className="location-title">
                {location.title}
              </div>
              <div className="location-ability">
                {location.ability}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
