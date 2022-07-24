// import React from "react";
import React from "react";
import PageTitle from "./Components/PageTitle";
import PlayerTable from "./Components/PlayerTable";

class SearchResult extends React.Component {
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
      <div className="SearchResult">
        <PageTitle title={"Search Result"} />
        <PlayerTable players={this.props.players} editHandler={this.editHandler} deleteHandler={this.deleteHandler} />
      </div>
    );
  }
}

export default SearchResult;
