import './Grid.css';
import one from './grid_assets/1.jpg';
import two from './grid_assets/2.webp';
import three from './grid_assets/3.webp';
import four from './grid_assets/4.jpg';
import five from './grid_assets/5.jpg';
import six from './grid_assets/6.png';

import 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js';
  
 
function Grid() {
    return (
        <div class="container">
            <div class="row" data-masonry='{"percentPosition": true }'>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                        <img class="bd-placeholder-img card-img" width="100%" height="" src={one} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                    <img class="bd-placeholder-img card-img" width="100%" height="" src={two} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                    <img class="bd-placeholder-img card-img" width="100%" height="" src={three} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                    <img class="bd-placeholder-img card-img" width="100%" height="" src={four} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                    <img class="bd-placeholder-img card-img" width="100%" height="" src={five} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4 mb-4">
                    <div class="card">
                    <img class="bd-placeholder-img card-img" width="100%" height="" src={six} role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
            </div>
            <h2>Online Experiences</h2>
            <p>Exciting experiences to pick and choose from. Unique interactive activities led by one-of-a-kind hosts, all without leaving your home.</p>
        </div>
    );
}

export default Grid;
