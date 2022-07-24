import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "./MyNavbar";
import Home from "./Home";
import NewPlayerForm from "./NewPlayerForm";
import EditPlayerForm from "./EditPlayerForm";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleNewPlayer = this.handleNewPlayer.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChangeUsername(value) {
    this.setState({ newUsername: value });
  }
  handleChangeEmail(value) {
    this.setState({ newEmail: value });
  }
  handleChangePassword(value) {
    this.setState({ newPassword: value });
  }
  handleChangeExperience(value) {
    this.setState({ newExperience: value });
  }

  handleNewPlayer() {
    this.setState({
      players: [
        ...this.state.players,
        {
          id: Number(this.state.players.length + 1),
          username: this.state.newUsername,
          email: this.state.newEmail,
          password: this.state.newPassword,
          experience: this.state.newExperience,
          lvl: this.state.newExperience / 1000,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          deleted: false,
        },
      ],
    });
  }

  deleteHandler(value) {
    let mappedState = this.state.players.map((obj) => {
      if (Number(obj.id) === Number(value)) {
        return { ...obj, deleted: true };
      } else {
        return obj;
      }
    });
    this.setState({ players: mappedState });
  }

  editHandler(value) {
    console.log(value);
    function checker(player) {
      return Number(player.id) === Number(value);
    }

    let foundPlayer = this.state.players.filter(checker);

    this.setState({
      newId: value,
      newUsername: foundPlayer[0].username,
      newEmail: foundPlayer[0].email,
      newPassword: foundPlayer[0].password,
      newExperience: foundPlayer[0].experience,
    });
  }

  handleSubmitEdit() {
    let mappedState = this.state.players.map((obj) => {
      if (Number(obj.id) === Number(this.state.newId)) {
        return { ...obj, username: this.state.newUsername, email: this.state.newEmail, password: this.state.newPassword, experience: this.state.newExperience, lvl: this.state.newExperience / 1000, updatedAt: Date.now() };
      } else {
        return obj;
      }
    });

    this.setState({ players: mappedState });
    console.log(this.state);
  }

  handleSearch() {
    console.log(this.state);
    let query = new RegExp(`${this.state.newUsername}`, "i");
    let foundPlayers = this.state.players.filter((player) => query.test(player.username));

    this.setState({
      queryResult: foundPlayers,
    });
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Container className="d-flex flex-column justify-content-center align-items-center mt-4">
          <Routes>
            <Route path="/" element={<Home players={this.state.players} onDeleteHandler={this.deleteHandler} onEditHandler={this.editHandler} />} />
            <Route
              path="/new"
              element={
                <NewPlayerForm
                  onUsernameChange={this.handleChangeUsername}
                  onEmailChange={this.handleChangeEmail}
                  onPasswordChange={this.handleChangePassword}
                  onExperienceChange={this.handleChangeExperience}
                  onNewPlayer={this.handleNewPlayer}
                />
              }
            />
            <Route
              path="/edit"
              element={
                <EditPlayerForm
                  player={{
                    newId: this.state.newId,
                    newUsername: this.state.newUsername,
                    newEmail: this.state.newEmail,
                    newPassword: this.state.newPassword,
                    newExperience: this.state.newExperience,
                  }}
                  onUsernameChange={this.handleChangeUsername}
                  onEmailChange={this.handleChangeEmail}
                  onPasswordChange={this.handleChangePassword}
                  onExperienceChange={this.handleChangeExperience}
                  onSubmitEdit={this.handleSubmitEdit}
                />
              }
            />
            <Route path="/search" element={<SearchForm onUsernameChange={this.handleChangeUsername} onSearch={this.handleSearch} />} />
            <Route path="/search/result" element={<SearchResult players={this.state.queryResult} onDeleteHandler={this.deleteHandler} onEditHandler={this.editHandler} />} />
          </Routes>
        </Container>
      </div>
    );
  }
}

export default App;
