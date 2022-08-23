import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="card-name">
          Nome da carta:
          <input
            data-testid="name-input"
            name="card-name"
            type="text"
          />
        </label>

        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            name="description"
            type="textarea"
          />
        </label>

        <label htmlFor="attr1">
          Attr 1:
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
          />
        </label>

        <label htmlFor="attr2">
          Attr 2:
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
          />
        </label>

        <label htmlFor="attr3">
          Attr 3:
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
          />
        </label>

        <label htmlFor="card-image">
          Imagem:
          <input
            data-testid="image-input"
            name="card-image"
            type="text"
          />
        </label>

        <label htmlFor="card-rare">
          Raridade:
          <select
            data-testid="rare-input"
            name="card-rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="card-trunfo">
          <input
            data-testid="trunfo-input"
            name="card-trunfo"
            type="checkbox"
          />
          Super Trunfo
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar

        </button>
      </div>

    );
  }
}

export default Form;
