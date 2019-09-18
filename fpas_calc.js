'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    if (this.state.pressed) {
      return 'Button Pressed.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ pressed: true }) },
      'Press Here'
    );
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(LikeButton), domContainer);