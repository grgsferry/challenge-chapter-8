import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PlayerTable(props) {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Experience</th>
          <th>Lvl</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map(
          (val) =>
            !val.deleted && (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.experience}</td>
                <td>{val.lvl}</td>
                <td>{new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(val.createdAt)}</td>
                <td>
                  <Link to="/edit">
                    <Button className="mx-1" size="sm" variant="light" onClick={props.editHandler} value={val.id}>
                      &#9999;
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button className="mx-1" size="sm" variant="light" onClick={props.deleteHandler} value={val.id}>
                      &#10060;
                    </Button>
                  </Link>
                </td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}

export default PlayerTable;
