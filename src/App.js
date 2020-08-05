import React from "react";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: [],
    };
    console.log("constructor is constructing");
  }
  componentDidMount() {
    console.log("componentdidMount");
    Axios.get("https://api.github.com/users/lyntechi")
      .then((response) => {
        this.setState({
          githubUser: response.data,
        });
      })
      .catch((error) => {
        console.log("error with API response", error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    prevState.githubUser !== this.state.githubUser
      ? console.log("data has changed") 
      : console.log("didnt change");
  }
  render() {
    console.log("app is rendering");
    return <div className="App"></div>;
  }
}
export default App;
