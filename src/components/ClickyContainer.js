import React from "react";
// import Card from "./Card";
// import data from "../Characters.json"

const ClickyContainer = props => (
        <div className="container-fluid text-center">
            <div className="container">
            <div class="row">
            {/* {data.map((el) => (<Card 
            key={el.id} 
            name={el.name} 
            image={el.image} />))} */}
            {props.children}
					
				</div>
            
            
            </div>
        </div>
    )



export default ClickyContainer;