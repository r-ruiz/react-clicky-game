import React, { Component } from 'react';
import Card from './components/Card';
import Grid from './components/Grid';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import characters from './characters.json';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    characters,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    this.state.characters.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickTotal = id => {
    this.state.characters.find((tally, i) => {
      if (tally.id === id) {
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          if (this.state.score === characters.length){
            alert('You Won!');
            return true;
          }
          this.state.characters.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Grid>
          <Header score={this.state.score}>Click each image only once!</Header>
          {this.state.characters.map(card => (
            <Card
              clickTotal={this.clickTotal}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
