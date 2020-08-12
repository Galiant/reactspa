import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import FormError from "./FormError";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState(null);

  useEffect(() => {
    if (password !== repeatPassword) {
      setErrorMesage("Passwords do not match!");
    } else {
      setErrorMesage(null);
    }
  }, [password, repeatPassword]);

  const handleChange = (event, setItem) => {
    return setItem(event.target.value);
  };

  const handleSubmit = (e) => {
    const registrationInfo = {
      displayName,
      email,
      password,
    };
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .catch((error) => {
        if (error.message !== null) {
          setErrorMesage(error.message);
        } else {
          setErrorMesage(null);
        }
      });
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Register</h3>
                <div className="form-row">
                  {errorMessage && <FormError theMessage={errorMessage} />}
                  <section className="col-sm-12 form-group">
                    <label
                      className="form-control-label sr-only"
                      htmlFor="displayName"
                    >
                      Display Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="displayName"
                      placeholder="Display Name"
                      name="displayName"
                      required
                      value={displayName}
                      onChange={(e) => handleChange(e, setDisplayName)}
                    />
                  </section>
                </div>
                <section className="form-group">
                  <label className="form-control-label sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => handleChange(e, setEmail)}
                  />
                </section>
                <div className="form-row">
                  <section className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => handleChange(e, setPassword)}
                    />
                  </section>
                  <section className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="password"
                      required
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      value={repeatPassword}
                      onChange={(e) => handleChange(e, setRepeatPassword)}
                    />
                  </section>
                </div>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
