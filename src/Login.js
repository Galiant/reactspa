import React, { useState } from "react";
import firebase from "./Firebase";
import FormError from "./FormError";
import { navigate } from "@reach/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState(null);

  const handleChange = (event, setItem) => {
    return setItem(event.target.value);
  };

  const handleSubmit = e => {
    const registrationInfo = {
      email,
      password,
    };
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        navigate("/meetings");
      })
      .catch(error => {
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
          <div className="col-lg-6">
            <div className="card bg-light">
              <div className="card-body">
                <h3 className="font-weight-light mb-3">Log in</h3>
                <section className="form-group">
                  {errorMessage && <FormError theMessage={errorMessage} />}
                  <label className="form-control-label sr-only" htmlFor="Email">
                    Email
                  </label>
                  <input
                    required
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => handleChange(e, setEmail)}
                  />
                </section>
                <section className="form-group">
                  <input
                    required
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => handleChange(e, setPassword)}
                  />
                </section>
                <div className="form-group text-right mb-0">
                  <button className="btn btn-primary" type="submit">
                    Log in
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

export default Login;
