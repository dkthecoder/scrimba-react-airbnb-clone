import './Navigation.css';

import logo from './logo.png';

function Navigation() {
    return (
        <main>
            <h1 class="visually-hidden">Headers examples</h1>

            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img src={logo} class="bi me-2" width="40" height="32"></img>
                        <span class="fs-4">WaterRNR</span>
                    </a>

                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                </header>
            </div>

            <div class="b-example-divider"></div>


        </main>
    );
}

export default Navigation;