import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../ducks/reducer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
      password: "",
      first_name: "",
      last_name: "",
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    axios.get("/api/admin").then(res => {
      this.props.setUser(res.data);
    });
  }

  login = () => {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("/api/login", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  };
  register() {
    const loginPayload = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    axios
      .post("/api/admin_register", loginPayload)
      .then(res => {
        this.props.setUser(res.data);
      })
      .catch(err => alert(err));
  }

  changeHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  logout = () => {
    axios.get("/api/logout").then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    const { username, password, first_name, last_name } = this.state;
    const { user } = this.props;
    return (
      <header>
        <div>
          <div />
          <nav>
            <ul>
              <li>
                <NavLink exact to="/admin" activeStyle={{ color: "red" }}>
                  Admin
                </NavLink>
              </li>
              {!user ? (
                <li>
                  <input
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="first_name"
                    type="first_name"
                    name="first_name"
                    value={first_name}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  <input
                    placeholder="last_name"
                    type="last_name"
                    name="last_name"
                    value={last_name}
                    onChange={e =>
                      this.changeHandler(e.target.name, e.target.value)
                    }
                  />
                  
                  <button onClick={this.register}>Register</button>
                  <button onClick={this.login}>login</button>
                </li>
              ) : (
                <button onClick={this.logout}>logout</button>
              )}
              
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    user: reduxState.user
  };
};
const mapDispatchToProps = {
  setUser: setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
