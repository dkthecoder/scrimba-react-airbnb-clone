import './Card.css';

function card(props) {
    let badgeText
    if (props.openSpots > 0) {
        badgeText = props.location
    }
    else if (props.openSpots == 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <div class="col">
            <div class="card shadow-sm">
            {badgeText && <div className="card--badge">{badgeText}</div>}
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