import React, { Component } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Wrapper from "../components/Wrapper";
import Col from "../components/Col";
import Row from "../components/Row";
import characters from "../utils/characters.json";

class Home extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      characters,
      match: false,
      matchCount: 0
    };

    handleBtnClick = event => {
      // Get the data-value of the clicked button
      const btnType = event.target.attributes.Item("data-value").value;
      // Clone this.state to the newState object
      // We'll modify this object and use it to set our component's state
      const newState = { ...this.state };
  
      if (btnType === "pick") {
        console.log("Clicked");
        // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
        newState.match = 1 === Math.floor(Math.random() * 5) + 1;
  
        // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
        newState.matchCount = newState.match
          ? newState.matchCount + 1
          : newState.matchCount;
      } else {
        // If we thumbs down'ed the dog, we haven't matched with it
        newState.match = false;
      }
      // Replace our component's state with newState, load the next dog image
      this.setState(newState);
      // this.loadNextDog();
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
        <Wrapper>
          <Row>
            <Col size="md-12">
          {this.state.characters.map(character => (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
          </Col>
          </Row>
        </Wrapper>
      );
    }
  }
  

export default Home;
