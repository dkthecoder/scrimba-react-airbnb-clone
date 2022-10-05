import './Card.css';

function card(props) {
    return (
        <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="300" src={props.img} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-text">{props.name}</p>
                    <small class="text-muted">{props.rating} 🌟</small>
                </div>
            </div>
        </div>


    );
}

export default card;