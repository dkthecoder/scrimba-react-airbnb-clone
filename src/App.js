import './App.css';
import Navigation from './Navigation';
import Grid from './Grid';
import Card from './Card';

import one from './cards/1.webp';
import two from './cards/2.jpg';
import three from './cards/3.jpg';

function App() {
  return (
    <div>
      <Navigation />
      <Grid />
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card img={one} name="MotorCycle riding" rating="4.5/5" />
            <Card img={two} name="SPA Day" rating="3.7/5" />
            <Card img={three} name="Sword fighting" rating="4.1/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
