import { Form } from "react-bootstrap";

function FormGroupPlayer(props) {
  return (
    <>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control type="text" name="username" id="username" placeholder="Enter username" onChange={props.changeUsername} value={props.valueUsername}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="email">Email:</Form.Label>
        <Form.Control type="email" name="email" id="email" placeholder="Enter email" onChange={props.changeEmail} value={props.valueEmail}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control type="password" name="password" id="password" placeholder="Enter password" onChange={props.changePassword} value={props.valuePassword}></Form.Control>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label htmlFor="experience">Experience:</Form.Label>
        <Form.Control type="number" name="experience" id="experience" placeholder="Enter experience" onChange={props.changeExperience} value={props.valueExperience}></Form.Control>
      </Form.Group>
    </>
  );
}
export default FormGroupPlayer;
