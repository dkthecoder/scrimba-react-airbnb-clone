import './Card.css';

import one from './cards/1.webp';
import two from './cards/2.jpg';
import three from './cards/3.jpg';

function App() {
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card shadow-sm">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src={one} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <p class="card-text">Motorcycle Riding</p>
                                <small class="text-muted">4.3/5 🌟</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src={two} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <p class="card-text">SPA and RnR</p>
                                <small class="text-muted">4.1/5 🌟</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card shadow-sm">
                            <img class="bd-placeholder-img card-img-top" width="100%" height="300" src={three} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <p class="card-text">Sword Fighting</p>
                                <small class="text-muted">4.5/5 🌟</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;