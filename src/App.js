import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const maxValue = 210;
const maxCounter = 90;

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    card: [],
    // hasTrunfo: false,
  };

  disabledButton = () => {
    const { cardName,
      cardDescription, cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const counter = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
    let counters = true;
    let biggerThen = true;
    const number1 = Number(cardAttr1);
    const number2 = Number(cardAttr2);
    const number3 = Number(cardAttr3);
    if (number1 < 0 || number2 < 0 || number3 < 0) {
      counters = false;
    }
    if (number1 > maxCounter || number2
      > maxCounter || number3 > maxCounter) {
      biggerThen = false;
    } else if (cardName && cardDescription && cardImage && (counter <= maxValue)
    && counters && biggerThen) {
      return false;
    }
    return true;
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (objetoInfo) => {
    this.setState((prevState) => ({
      card: [...prevState.card, objetoInfo],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardRare: 'normal',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
    }));
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1> My Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.disabledButton() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
