import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "./Components/PageTitle";
import FormGroupPlayer from "./Components/FormGroupPlayer";

class EditPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleChangeUsername(e) {
    this.props.onUsernameChange(e.target.value);
  }
  handleChangeEmail(e) {
    this.props.onEmailChange(e.target.value);
  }
  handleChangePassword(e) {
    this.props.onPasswordChange(e.target.value);
  }
  handleChangeExperience(e) {
    this.props.onExperienceChange(e.target.value);
  }
  handleSubmitEdit(e) {
    this.props.onSubmitEdit();
  }

  render() {
    return (
      <div className="EditForm">
        <div className="mb-3">
          <Link to="/">
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
        <PageTitle title={"Edit Player"} />
        <Card className="p-3" style={{ width: "24rem" }}>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="id">Editing for ID:</Form.Label>
              <Form.Control type="number" name="id" id="id" value={this.props.player.newId} readOnly></Form.Control>
            </Form.Group>

            <FormGroupPlayer
              changeUsername={this.handleChangeUsername}
              changeEmail={this.handleChangeEmail}
              changePassword={this.handleChangePassword}
              changeExperience={this.handleChangeExperience}
              valueUsername={this.props.player.newUsername}
              valueEmail={this.props.player.newEmail}
              valuePassword={this.props.player.newPassword}
              valueExperience={this.props.player.newExperience}
            />

            <div className="d-grid gap-2">
              <Link to="/">
                <Button variant="primary" size="lg" onClick={this.handleSubmitEdit}>
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

export default EditPlayerForm;
