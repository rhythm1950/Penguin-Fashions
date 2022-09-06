import React from "react";

const Newsletter = () => {
  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <h1>Subscribe To Our Newsletter</h1>
        </div>

        <div className="col-md-6">
          <form className="row row-cols-lg-auto g-3 align-items-center">
            <div>
              <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupUsername"
              >
                Username
              </label>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Your Email Address"
                  style={{ padding: "14px 50px" }}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-all btn-lg"
                style={{ padding: "15px 20px", fontSize: "15px" }}
              >
                <i
                  style={{ fontSize: "15px", marginRight: "10px" }}
                  className="fas fa-bell"
                ></i>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
