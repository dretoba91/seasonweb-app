import React from "react";
import ReactDOM from "react-dom";
import PageLoading from "./PageLoading";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   //  method to get the current position of user, we make use of call back function

//   return <div>Welcome to React</div>;
// };

// Using Class based component

class App extends React.Component {
  // There are two ways to initialize a State: 1. using Constructor and 2. not using Constructor

  // 1. Initializing the state object using the constructor method
  /*
  constructor(props) {
    // super() is always required
    super(props);

    // This is the only time we do DIRECT ASSIGNMENT to the this.state
    this.state = { lat: null, errorMessage: "" }; // State object initiallize.

    // we gave lat a null value because we don't know the latitude value yet.
  }
*/

  // 2. Initializing the state by not using the Constructor method

  state = { lat: null, errorMessage: "" };

  // Following the lifecycle method

  componentDidMount() {
    // initial data loading method for the component

    window.navigator.geolocation.getCurrentPosition(
      // we need to update the State object [i.e the lat: ] therefore we call the setState()
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },

      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // creating this function to avoid CONDITIONALS IN RENDER ()
  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <PageLoading message="Please accept request to load location!!!." />;
  }

  // Render is require by React
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
