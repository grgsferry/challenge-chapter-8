// import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import PageTitle from "./Components/PageTitle";
import PlayerTable from "./Components/PlayerTable";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.editHandler = this.editHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  editHandler(event) {
    this.props.onEditHandler(event.target.value);
  }

  deleteHandler(event) {
    this.props.onDeleteHandler(event.target.value);
  }

  render() {
    return (
      <div className="Home">
        <div className="mb-3">
          <Link to="/new">
            <Button variant="primary">Add New Player</Button>
          </Link>
        </div>
        <PageTitle title={"All Players Data"} />
        <PlayerTable players={this.props.players} editHandler={this.editHandler} deleteHandler={this.deleteHandler} />
      </div>
    );
  }
}

export default Home;
