import React, { Component } from "react";
import Header from "./components/Header"
import Jumbotron from "./components/Jumbotron"
import ClickyContainer from "./components/ClickyContainer"
// import Characters from "../Characters.json"
import Card from "./components/Card";
import Characters from "./Characters.json"

function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    Characters,
    score: 0,
    clicked: []
  }

  handleClick = id => {
    // if the id of the character clicked is not yet been added to the array, aka if character has not been clicked on yet add +1 to the score, shuffle the array, and add the id of the clicked charcter into the clicked array
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } 
    // if the id of the selected matches an index of the clicked array you LOSE, reset game, so if there id has already been added to the array you done messed up by clicking on them a second time
    else {
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore === 12) {
      alert("You Win!");
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(Characters);
    this.setState({ Characters: shuffledCharacters });
  }
  
  render() {
    return(
      <div>
       <Header 
       score={this.state.score} 
       />
       <Jumbotron /> 
       <ClickyContainer>
          {this.state.Characters.map((el) => (
            <Card 
                key={el.id}
                id={el.id} 
                name={el.name} 
                image={el.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset} 
                handleShuffle={this.handleShuffle}
            />))}
        </ClickyContainer>
      </div>
    )
  }
}

export default App;
