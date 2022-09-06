import React from "react";

const Her = () => {
  return (
    <section className=" container container-fluid mt-5" id="products">
        <h1 className="mb-4">WOMAN JACKET</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 jack">
          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/SeekPng 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Yellow Coat Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12  "
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/PngItem_2597366 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Ladies Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12"
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/image 15.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Woman Leather Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Her;
