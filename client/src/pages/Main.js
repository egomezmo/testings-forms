import React, { Component } from "react";
import "./Main.css";


class Books extends Component {

  render() {
    return (
      <div className="container">
        <br /><br /><br />
        <h2>Register or start your Session</h2>

        <div id="register">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <hr/>
            <h3>Keys to success inside!!</h3>
          </form>
        </div>

      </div>
    );
  }
}

export default Books;
