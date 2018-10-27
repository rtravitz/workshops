import React, { Component } from 'react';
import logo from './finish_flags.png';
import winner from './winner.JPG'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" />
          <h1 className="App-title">CompoZed Racing Hall of Fame</h1>
        </header>
        <nav>
          <ul>
            <li><a href="#">Past Winners</a></li>
            <li><a href="#">Karts</a></li>
            <li><a href="#">Rage Zone</a></li>
          </ul>
        </nav>
        <img src={winner} alt="winner" />
        <div class="winning-box">
          <h3>Prizes</h3>
          <ul>
            <li>Fame</li>
            <li>Glory</li>
            <li>Adoration</li>
          </ul>
          <p>Think you're ready?</p>
          <button>Yes!</button>
          <button>Honestly, I'd rather play Mario Kart</button>
        </div>
        <div class="losing-box">
          <h3>Cost</h3>
          <p>Racing costs an unknown amount of Tommy Bucks™</p>
        </div>
        <footer>
          <div>
            <nav>
              <ul>
                <li><a href="#">Past Winners</a></li>
                <li><a href="#">Karts</a></li>
                <li><a href="#">Rage Zone</a></li>
              </ul>
            </nav>
            <p><span>Disclaimer:</span> Racing can result in rage incidents on the track. Drivers participate at their own risk. Drivers who wildly break karts may be asked to not participate in future races.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
