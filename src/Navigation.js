import './Navigation.css';

import logo from './logo.png';

function Navigation() {
    return (
        <main>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo} class="bi me-2" width="50" height="40"></img>
                        <span class="fs-4">WaterRNR</span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><button type="button" class="btn btn-dark active">Home</button></li>
                        <li class="nav-item"><button type="button" class="btn btn-dark">Button 1</button></li>
                        <li class="nav-item"><button type="button" class="btn btn-dark">Button 2</button></li>
                        <li class="nav-item"><button type="button" class="btn btn-dark">Button 3</button></li>
                    </ul>
                </header>
            </div>
        </main>
    );
}

export default Navigation;