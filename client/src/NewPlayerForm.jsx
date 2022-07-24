import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "./Components/PageTitle";
import FormGroupPlayer from "./Components/FormGroupPlayer";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleNewPlayer = this.handleNewPlayer.bind(this);
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
  handleNewPlayer(e) {
    this.props.onNewPlayer();
  }

  render() {
    return (
      <div className="SignupForm">
        <div className="mb-3">
          <Link to="/">
            <Button variant="secondary">Back</Button>
          </Link>
        </div>
        <PageTitle title={"Add New Player"} />
        <Card className="p-3" style={{ width: "24rem" }}>
          <Form>
            <FormGroupPlayer changeUsername={this.handleChangeUsername} changeEmail={this.handleChangeEmail} changePassword={this.handleChangePassword} changeExperience={this.handleChangeExperience} />
            <div className="d-grid gap-2">
              <Link to="/">
                <Button variant="primary" size="lg" onClick={this.handleNewPlayer}>
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

export default SignupForm;
