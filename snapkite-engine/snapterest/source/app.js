import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactClass extends Component {
  state = {
    isHidden: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      isHeaderHidden: !prevState.isHeaderHidden
    }));
  }

  render () {
    const {
      isHeaderHidden,
    } = this.state;

    if (isHeaderHidden) {
      return (
        <button
          className="btn ban-default"
          onClick={this.handleClick}
        >
          Toggle Header
        </button>
      );
    }

    return (
      <div>
        <h1 className="header">React Component</h1>
        <button
          className="btn ban-default"
          onClick={this.handleClick}
        >
          Toggle Header
        </button>
      </div>
    );
  }
}

const reactComponent = ReactDOM.render(
  <ReactClass/ >,
  document.getElementById('react-application')
);

export default ReactClass;