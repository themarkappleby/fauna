import './App.css';
import cards from './cards';
import snap from './cards-snap';

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

console.log(output)

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

const imgName = title => {
  title = title.toLowerCase().replace(/\s/gm, '-');
  return title;
}

function App() {

  const handleClick = card => {
    const name = imgName(card.title);
    navigator.clipboard.writeText(name);
    window.open(`https://www.google.com/search?tbm=isch&q=${name}-painting`, '_blank');
    console.log(`Copied: ${name}!`)
  }

  return (
    <div className="cards">
      {cards.characters.map(card => {
        const activeOrder = ['0', '1', '2']
        shuffle(activeOrder);
        return (
          <div className="card" key={card.title} onClick={() => handleClick(card)}>
              <div className="flags">
                <div className="flag">
                    <div>{activeOrder[0]}</div>
                    <img src="/arrow.svg" />
                </div>
                <div className="flag">
                    <div>{activeOrder[1]}</div>
                    <img src="/arrow.svg" />
                </div>
                <div className="flag">
                    <div>{activeOrder[2]}</div>
                    <img src="/arrow.svg" />
                </div>
              </div>
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
              <div className="card-image" style={{backgroundImage: `url(/${imgName(card.title)}.png)`}} />
          </div>
        )
      })}
      {cards.locations.map(location => {
        return (
          <div onClick={() => handleClick(location)} className="card location" key={location.title}>
            <div className="location-image" style={{backgroundImage: `url(/${imgName(location.title)}.png)`}} />
            <div>
              {[...Array(2)].map((e, i) => (
                <div className="location-info">
                  <div>
                    <div className="location-title">
                      {location.title}
                    </div>
                    <div className="location-ability">
                      {location.ability}.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
      <div className="card instruction">
        <strong>Setup:</strong>
        <ol>
          <li><b>Set the die</b> in front of a player with the 1-side upwards. This player has intiative.</li>
          <li><b>Place 3 location cards</b> face down between players.</li>
          <li><b>Deal 3 Fauna cards</b> to each player.</li>
          <li><b>Keep 1 Fauna card and pass</b> the other 2 to the other player.</li>
          <li><b>Keep 1 Fauna card</b> and discard the other.</li>
          <li><b>Repeat steps 3 to 5.</b></li>
          <li><b>Form the draw pile</b> by shuffling all discarded and remaining Fauna cards.</li>
        </ol>
      </div>
      <div className="card instruction">
        <strong>Round:</strong>
        <ol>
          <li><b>Pass the die</b> and increase by 1. Skip if first round.</li>
          <li><b>Flip an unrevealed location card.</b></li>
          <li>Both players <b>draw 2 cards</b>, keep one, discard the other.</li>
          <li>Both players <b>play cards</b> face down in a row.</li>
          <li><b>Reveal cards</b> left to right and place them at assigned locations, starting with initiative player. Limit 4 Fauna per location per player.</li>
          <li>If this is the 6th round, <b>determine winner</b> based on who has the most influence at each location.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
