import React from "react"

const Card = props => (
    <div class="col-sm-6 col-md-3">
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
                <p>{props.name}</p>
            </div>
        </div>
    </div>
)
export default Card;