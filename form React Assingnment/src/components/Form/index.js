// import {withRouter} from 'react-router-dom'

import { Component } from "react";

import "./index.css";

const errorText = "Enter valid information";
let passwordErrorMsg;
let termErrorMsg;

class Form extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    fullName: "",
    phoneNo: "",
    showSubmitError: false,
    errorMsg: "",
    successMsg: "",
    emailError: false,
    password1Error: false,
    password2Error: false,
    termsError: false,
    usernameError: false,
    phoneNoError: false,
  };

  onChangeEmail = (event) => {
    if (event.target.value === "") {
      this.setState({ emailError: true });
    } else {
      this.setState({ email: event.target.value, emailError: false });
    }
  };

  onChangePassword1 = (event) => {
    if (event.target.value === "") {
      this.setState({ password1Error: true });
      passwordErrorMsg = errorText;
    } else if (event.target.value.length < 8) {
      this.setState({ password1Error: true });
      passwordErrorMsg = "password should be 8 characters and above";
    } else {
      this.setState({ password1: event.target.value, password1Error: false });
    }
  };

  onChangePassword2 = (event) => {
    const { password1 } = this.state;
    if (event.target.value === "") {
      this.setState({ password2Error: true });
      passwordErrorMsg = errorText;
    } else if (password1 !== event.target.value) {
      this.setState({ password2Error: true });
      passwordErrorMsg = "Those passwords didn't match";
    } else {
      this.setState({ password2: event.target.value, password2Error: false });
    }
  };

  onChangeUsername = (event) => {
    if (event.target.value === "") {
      this.setState({ usernameError: true });
    } else {
      this.setState({ fullName: event.target.value, usernameError: false });
    }
  };

  onChangePhoneNo = (event) => {
    const no = parseInt(event.target.value);
    if (no === "" || typeof no !== "number") {
      this.setState({ phoneNoError: true });
    } else {
      this.setState({ phoneNo: event.target.value, phoneNoError: false });
    }
  };

  onChangeTerms = (event) => {
    if (event.target.checked === false) {
      this.setState({ termsError: true });
      termErrorMsg = "*Required";
    } else {
      this.setState({ termsError: false });
      termErrorMsg = "";
    }
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    console.log(history);
    history.replace("/");
  };

  onSubmitFailure = (errorMsg) => {
    this.setState({ showSubmitError: true, errorMsg });
  };

  validateFormData = () => {
    const { email, fullName, phoneNo, password1, password2, termsError } =
      this.state;
    if (email === "") {
      this.setState({ emailError: true });
    }
    if (password1 === "") {
      this.setState({ password1Error: true });
      passwordErrorMsg = errorText;
    }
    if (password2 === "") {
      this.setState({ password1Error: true });
      passwordErrorMsg = errorText;
    }
    if (password1 !== password2) {
      this.setState({ password2Error: true });
      passwordErrorMsg = "Those passwords didn't match";
    }
    if (fullName === "") {
      this.setState({ usernameError: true });
    }
    if (phoneNo === "") {
      this.setState({ phoneNoError: true });
    }
    if (termsError === false) {
      this.setState({ termsError: true });
      termErrorMsg = "*Required";
    }

    console.log("validated");
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.validateFormData();
    const { email, fullName, phoneNo, password2 } = this.state;
    const userDetails = { email, password2, fullName, phoneNo };
    const url = "https://gorest.co.in/public-api/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(response);
    if (response.ok === true) {
      this.onSubmitSuccess();
    } else {
      this.onSubmitFailure(data.error_msg);
    }
  };

  render() {
    const {
      emailError,
      password1Error,
      password2Error,
      usernameError,
      phoneNoError,
      showSubmitError,
      termsError,
      successMsg,
      errorMsg,
    } = this.state;

    return (
      <div className="form">
        <h2>Create an account</h2>
        <form className="form__container" onSubmit={this.submitForm}>
          <label className="form__label" htmlFor="email">
            Your email address
          </label>
          <input
            id="email"
            type="email"
            className="form__input"
            onBlur={this.onChangeEmail}
          />
          {emailError && <p className="error-message">{errorText}</p>}
          <label className="form__label" htmlFor="password1">
            Your password
          </label>
          <input
            type="password"
            className="form__input"
            id="password1"
            onBlur={this.onChangePassword1}
          />
          {password1Error && (
            <p className="error-message">{passwordErrorMsg}</p>
          )}
          <label className="form__label" htmlFor="password1">
            Confirm your password
          </label>
          <input
            type="password"
            className="form__input"
            id="password2"
            onBlur={this.onChangePassword2}
          />
          {password2Error && (
            <p className="error-message">{passwordErrorMsg}</p>
          )}
          <label className="form__label" htmlFor="username">
            Your full name
          </label>
          <input
            type="text"
            className="form__input"
            id="username"
            onBlur={this.onChangeUsername}
          />
          {usernameError && <p className="error-message">{errorText}</p>}
          <label className="form__label" htmlFor="phoneNo">
            Your phone number
          </label>
          <input
            type="text"
            className="form__input form__input--small"
            id="phoneNo"
            onBlur={this.onChangePhoneNo}
          />
          {phoneNoError && <p className="error-message">{errorText}</p>}
          <div className="form__item-checkbox">
            <input
              type="checkbox"
              className="form__input--checkbox"
              id="terms"
              onClick={this.onChangeTerms}
            />
            <label
              className="form__label form__label--checkbox"
              htmlFor="terms"
            >
              I read and agree to Terms and Conditions
            </label>
            {termsError && <p className="error-message">{termErrorMsg}</p>}
          </div>
          <div className="form__button-container">
            <button className="form__button" type="submit">
              Create account
            </button>
          </div>
          {showSubmitError ? (
            <p className="error-message">{successMsg}</p>
          ) : (
            <p className="error-message">{errorMsg}</p>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
