import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="div-form">
        <form>
          <label htmlFor="card-name">
            <strong>Nome da carta: </strong>
            <br />
            <input
              placeholder="Digite o nome da carta"
              data-testid="name-input"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            <strong>Descrição: </strong>
            <br />
            <textarea
              placeholder="Descreva sobre sua carta"
              data-testid="description-input"
              name="cardDescription"
              cols="25"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            <strong>Attr 1: </strong>
            <input
              max={ 90 }
              min={ 0 }
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            <strong>Attr 2: </strong>
            <input
              max={ 90 }
              min={ 0 }
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            <strong>Attr 3: </strong>
            <input
              max={ 90 }
              min={ 0 }
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-image">
            <strong>Imagem: </strong>
            <input
              placeholder="Adicione uma imagem"
              data-testid="image-input"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="card-rare">
            <strong>Raridade: </strong>
            <br />
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="card-trunfo">
            {hasTrunfo === false && <input
              data-testid="trunfo-input"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />}
            {hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}
            <strong> Super Trunfo</strong>
            <br />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({ cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            }) }
          >
            <strong>Salvar</strong>

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.string,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
