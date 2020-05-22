import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button } from "react-bootstrap";
import CustomInput from "../../componennts/shared/CustomInput";
import { setAuth } from "../../actions/index";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      loginResp: null,
      formData: {
        username: "",
        password: ""
      },
      formStatus: {
        username: false,
        password: false
      },
      formError: {
        username: "Enter valid user name",
        password: "Enter valid password (Min 5 Charecter Requried)"
      }
    };
  }

  componentDidMount(){
    const { data } = this.props;
    if(data.isAuthentication){
        this.props.history.push("/dashboard")
    }
  }

  componentDidUpdate(prevProps){
      if(prevProps.data!==this.props.data){
          const { data } = this.props;
          this.setState({ loginResp: data.message})
          if(data.isAuthentication){
              this.props.history.push("/dashboard")
          }
      }
  }

  onChangeField = (inputField, event, status) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [inputField]: event.target.value
      },
      formStatus: {
        ...this.state.formStatus,
        [inputField]: status
      }
    });
  };

  loginFormData = e => {
    const { dispatch } = this.props;
    const { username, password } = this.state.formStatus;
    this.setState({ isValid: true });
    if (username && password) {
        dispatch(setAuth(this.state.formData))
    }
  };

  render() {
    const { formData, isValid, formError, loginResp } = this.state;
    return (
      <Container className="App">
        <div className="login-container">
          <h1>Login</h1>
          <div className="invalid-msg">
            {loginResp}
          </div>
          <CustomInput
            type="text"
            validationType="email"
            value={formData.username}
            className="form-input"
            placeholder="User Name"
            isValid={isValid}
            onChangeField={(event, status) =>
              this.onChangeField("username", event, status)
            }
            message={formError.username}
          />
          <CustomInput
            type="password"
            validationType="password"
            value={formData.password}
            className="form-input"
            placeholder="Password"
            isValid={isValid}
            onChangeField={(event, status) =>
              this.onChangeField("password", event, status)
            }
            message={formError.password}
          />

          <Button onClick={this.loginFormData} className="form-input">
            LOGIN
          </Button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
    ...state,
    data: state.reducer
});
export default connect(mapStateToProps)(Login);
