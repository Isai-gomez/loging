import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
class App extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };
    const responseGoogle = response => {
      console.log(response);
    };
    return (
      <div className="App">
        <h1>LOFIN WITH FACEBOOK AND GOOGLE</h1>
        <FacebookLogin
          appId="" // app id no created yet
          fields="name, email,picture"
          callback={responseFacebook}
        ></FacebookLogin>
        <br />
        <br />
        <GoogleLogin
          clientId="" // clientID not created yet
          buttoText="LOGIN WHIT GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        ></GoogleLogin>
      </div>
    );
  }
}
export default App;
