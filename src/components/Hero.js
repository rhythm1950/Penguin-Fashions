import React from "react";

const Hero = () => {
  return (
    <section className="container container-fluid mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-md-12">
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "60px",
              color: "rgb(247, 203, 9)",
            }}
          >
            BE THE PENGUINS
          </h1>
          <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>OF WINTER</h1>
          <p style={{ lineHeight: "20px", margin: "25px 0px" }}>
            Lorem Ipsum is simply dummy text of the printing <br />
            typesetting industry.
          </p>
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

        <div className="col-lg-6 col-md-12 ">
          <img src="./Image/Group 33091.png" alt="person" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
