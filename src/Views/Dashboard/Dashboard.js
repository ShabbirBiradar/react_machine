import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Table } from "react-bootstrap";
import { tableData } from "../../actions/index";

import "./dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const { reducer, dispatch } = this.props;
    if (!reducer.isAuthentication) {
      this.props.history.push("/login");
    } else {
      dispatch(tableData());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reducer !== this.props.reducer) {
      this.setState({ data: this.props.reducer.data });
    }
  }

  logout=()=>{
    localStorage.removeItem('isAuthentication')
    window.location = "/login";
  }

  render() {
    return (
      <Container>
        <div className="dashboard-div">
          <h4 className="dashboard-header">
              <span>Dashboard</span>
              <span onClick={this.logout} className="logout">LOGOUT</span>
            </h4>
          <Table striped bordered hover>
            <thead className="table-header">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {this.state.data.map((i, k) => (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>{i.gender}</td>
                  <td>{i.email}</td>
                  <td>{i.phoneNo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Dashboard);
