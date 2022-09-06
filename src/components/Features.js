import React from "react";

const Features = () => {
  return (
    <section className="container fourth">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
            <div className="row gx-5">
              <div className="col">
                <div className="d-flex p-3 border bg-light">
                  <img
                    style={{
                      width: "95px",
                      height: "95px",
                      paddingRight: "20px",
                    }}
                    src="./Image/Logo, Icon/image 12.png"
                    alt="icon"
                  />

                  <div>
                    <h3 style={{ color: "rgb(1, 1, 80)" }}>
                      <strong>Find the Perfect Fit</strong>
                    </h3>
                    <p>
                      Everybody is different, which is why we offer styles for
                      every body.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
            <div className="row gx-5">
              <div className="col">
                <div className="d-flex p-3 border bg-light">
                  <img
                    style={{ width: "95px", height: "95px" }}
                    src="./Image/Logo, Icon/image 13.png"
                    alt="icon"
                  />

                  <div>
                    <h3 style={{ color: "rgb(1, 1, 80)" }}>
                      <strong>Free Exchanges</strong>
                    </h3>
                    <p>
                      One of the many reasons you can shop with peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
            <div className="row gx-5">
              <div className="col">
                <div className="d-flex p-3 border bg-light">
                  <img
                    style={{ width: "95px", height: "95px" }}
                    src="./Image/Logo, Icon/image 14.png"
                    alt="icon"
                  />

                  <div>
                    <h3 style={{ color: "rgb(1, 1, 80)" }}>
                      <strong>Contact Our Seller</strong>
                    </h3>
                    <p>
                      They are here to help you. That's quite literally what we
                      pay them for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 ">
          <img
            style={{ marginTop: "20px" }}
            src="./Image/Logo, Icon/XMLID 1.png"
            alt="shop"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
