import React from "react";
import "./App.css";
import Axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: [],
      githubUserFollowers: [],
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
        console.log(response);
      })
      .catch((error) => {
        console.log("error with API response", error);
      });
    Axios.get("https://api.github.com/users/lyntechi/followers")
      .then((response) => {
        this.setState({
          githubUserFollowers: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log("error with API response", error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    prevState.githubUser !== this.state.githubUser
      ? console.log("github data has changed")
      : console.log("github data didnt change");
    prevState.githubUserFollowers !== this.state.githubUserFollowers
      ? console.log("user followers data has changed")
      : console.log("user followers didnt change");
  }

  render() {
    console.log("app is rendering");
    return (
      <div className="App">
        <div>
          <h1>My Github Info</h1>
          <img src={this.state.githubUser.avatar_url} alt="" />
          <p> Name: {this.state.githubUser.name}</p>
          <p> Login Name: {this.state.githubUser.login}</p>
          <p><a href={this.state.githubUser.html_url}>Profile Link</a></p> 
          <p>Bio: {this.state.githubUser.bio}</p>
          <p>Following: {this.state.githubUser.following}</p>
          <p>Followers: {this.state.githubUser.followers}</p>
        </div>
        <div className="followersList">
          {/* <h1>My Followers</h1> */}
          {this.state.githubUserFollowers.map((item) => {
            return (
              <div className="followers" key={item.id}>
                <img src={item.avatar_url} alt="" />
                Login Name: {item.login}
                <br />
                <a href={item.html_url}>Profile Link</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
