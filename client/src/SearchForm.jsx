import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChangeUsername(e) {
    this.props.onUsernameChange(e.target.value);
  }

  handleSearch(e) {
    this.props.onSearch();
  }

  render() {
    return (
      <div className="SearchForm">
        <div className="mb-3">
          <Link to="/">
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
        <div className="mb-3">
          <h1>Search Player</h1>
        </div>
        <Card className="p-3" style={{ width: "24rem" }}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="username">Username (contains):</Form.Label>
              <Form.Control type="text" name="username" id="username" placeholder="Enter username" onChange={this.handleChangeUsername}></Form.Control>
            </Form.Group>
            <div className="d-grid gap-2">
              <Link to="/search/result">
                <Button variant="primary" size="lg" onClick={this.handleSearch}>
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        </Card>
      </div>
    );
  }
}

export default SearchForm;
