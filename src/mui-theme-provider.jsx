import {Component, PropTypes} from 'react';

class ThemeProvider extends Component {

  static propTypes = {
    children: PropTypes.element,
    muiTheme: PropTypes.object,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  getChildContext() {
    return {
      muiTheme: this.props.muiTheme,
    };
  }

  render() {
    return this.props.children;
  }
}

export default ThemeProvider;
