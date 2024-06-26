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
    // window.open(`https://www.google.com/search?tbm=isch&q=${name}-painting`, '_blank');
    console.log(`Copied: ${name}!`)
  }

  return (
    <div className="cards">
      <div className="card title">
        <div className="title-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/boreal-forest.png)`}} />
        <div>
          <strong>Fauna</strong>
          <div>A quick competitive card game for two; inspired by nature</div>
        </div>
        <div className="title-components">
          <ul>
            <li><b>Additional required components:</b></li>
            <li>1 six-sided die & 20 generic tokens</li>
          </ul>
        </div>
      </div>
      <div className="card instruction setup">
        <strong>Card Overview</strong>
        <ol>
          <li><b>Top left:</b> The amount of Energy required to play this card. The total available Energy for the turn is indicated by the Energy die.</li>
          <li><b>Top right:</b> The amount of Influence this card has over its Location.</li>
          <li><b>Top middle:</b> The placement legend. Play the card with the indicated number of tokens to assign it to the left, middle, or right Location, or to discard the card.</li>
        </ol>
      </div>
      <div className="card instruction setup">
        <strong>Game Setup</strong>
        <ol>
          <li><b>Set the Energy die</b> in front of a player with the 1-side upwards. This player has Initiative.</li>
          <li>Shuffle and <b>place 3 Location cards</b> face down between players.</li>
          <li>Shuffle and <b>deal 5 Fauna cards</b> to each player.</li>
          <li>Each player can choose to <b>discard any number of cards</b> from their hand and draw back up to 5 Fauna cards again.</li>
          <li><b>Form the Draw Pile</b> by shuffling all remaining Fauna cards.</li>
        </ol>
      </div>
      <div className="card instruction turn">
        <strong>Turn Sequence</strong>
        <ol>
          <li><b>Flip an unrevealed Location card</b>.</li>
          <li>Players each <b>draw cards</b> until they have a hand of 5 cards.</li>
          <li>Players <b>play cards face down</b> in a row with 0-3 tokens above each card to assign it to any Location.</li>
          <li><b>Reveal and place cards</b> at assigned Locations, starting with the Initiative player. Limit 4 Fauna per Location per player.</li>
          <li>In the 6th turn, the player that controls the most Locations wins.</li>
          <li><b>Pass the die</b> and increase it by 1.</li>
        </ol>
      </div>
      {cards.characters.map(card => {
        const activeOrder = ['0', '1', '2', '3']
        shuffle(activeOrder);
        return (
          <div className="card" key={card.title} onClick={() => handleClick(card)}>
              <div className="flags-wrapper">
                <div className="flags">
                  <div className="flag">
                      <div>{activeOrder[0]}</div>
                      <img src={`${process.env.PUBLIC_URL}/arrow.svg`} />
                  </div>
                  <div className="flag">
                      <div>{activeOrder[1]}</div>
                      <img src={`${process.env.PUBLIC_URL}/arrow.svg`} />
                  </div>
                  <div className="flag">
                      <div>{activeOrder[2]}</div>
                      <img src={`${process.env.PUBLIC_URL}/arrow.svg`} />
                  </div>
                </div>
                <div className="flags">
                  <div className="flag">
                      <div>{activeOrder[3]}</div>
                      <img src={`${process.env.PUBLIC_URL}/trash.svg`} />
                  </div>
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
              <div className="card-influence">
                <div>
                  <span>{card.influence}</span>
                  {/* <span>Influence</span> */}
                </div>
              </div>
              <div className="card-cost">
                <div>
                  <span>{card.cost}</span>
                  {/* <span>Energy</span> */}
                </div>
              </div>
              <div className="card-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${imgName(card.title)}.png)`}} />
          </div>
        )
      })}
      {cards.locations.map(location => {
        return (
          <div onClick={() => handleClick(location)} className="card location" key={location.title}>
            <div className="location-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${imgName(location.title)}.png)`}} />
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
    </div>
  );
}

export default App;
