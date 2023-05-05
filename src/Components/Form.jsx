import React from "react";
import Headers from "./Headers";

const Form = () => {
  return (
    <>
      <Headers />
      <div className="container">
        <div className="title text-center mt-5 mb-5">
          <h1 className="fw-bold">Log In</h1>
        </div>
        <div className="content input-gorup row justify-content-center">
          <div className="card col-6">
            <div className="name-section ms-5 me-5 mt-5">
              <h3 className="fw-semibold">Username</h3>
              <input
                type="text"
                className="form-control fst-italic p-3"
                placeholder="input your username ..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="email-section ms-5 me-5 mt-4">
              <h3 className="fw-semibold">Email</h3>
              <input
                type="text"
                className="form-control fst-italic p-3"
                placeholder="input your email ..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="password-section ms-5 me-5 mt-4">
              <h3 className="fw-semibold">Password</h3>
              <input
                type="password"
                className="form-control p-3"
                id="exampleInputPassword1"
                placeholder="Input your password ..."
              ></input>
            </div>
            <div className="submit-section d-flex justify-content-center mt-5 ms-5 me-5 mb-5">
              <button type="submit" className="btn btn-primary w-75">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
