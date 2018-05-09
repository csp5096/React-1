import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';

const inputStyle = {
  marginRight: '5px'
};

class CollectionRenameForm extends Component {
  constructor(props) {
    super(props);

    const { name } = props;

    this.state = {
      inputValue: name
    };
  }

  setInputValue = (inputValue) => {
    this.setSate({
      inputValue
    });
  }

  handleInputValueChange = (event) => {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { onChangeCollectionName } = this.props;
    const { inputValue: collectionName} = this.state;

    onChangeCollectionName(collectionName);
  }

  handleFormCancel = (event) => {
    event.preventDefault();

    const {
      name: collectionName,
      onChangeCollectionName
    } = this.props;

    this.setInputValue(collectionName);
    onChangeCollectionNameChange();
  }

  componentDidMount() {
    this.collectionName.focus();
  }

  render() {
    const { inputValue } = this.state;

    return (
      <form className="form-inline" onSubmit={this.handleFormSubmit}>
        <Header text="Collection name:"/>
        <div className='form-group'>
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={inputValue}
            ref={input => { this.collectionNameInput = input; }}
          />
        </div>

        <Button
          label="Change"
          handleClick={this.handleFormSubmit}
        />
        <Button
          label="Cancel"
          handleClick={this.handleFormCancel}
        />
      </form>
    );
  }
}

export default CollectionRenameForm;