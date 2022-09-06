import React from "react";

const Contact = () => {
  return (
    <section className="container container-fluid mt-5 mb-5">
      <h1 className="mb-3">CONTACT US</h1>

      <div className="row d-flex align-items-center">
        <div
          className="col-lg-4 col-md-6 col-sm-12 "
          style={{
            boxShadow: "10px 10px 20px rgb(223, 223, 223)",
            padding: "20px 20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
            <i className="far fa-envelope"></i>
          </h1>
          <h3 style={{ textAlign: "center" }}>Email Address</h3>
          <p style={{ textAlign: "center" }}>
            example@gmail.com <br />
            example2@gmail.com
          </p>
        </div>

        <div
          className="col-lg-4 col-md-6 col-sm-12 "
          style={{
            boxShadow: "10px 10px 20px rgb(223, 223, 223)",
            padding: "20px 20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
            <i className="fas fa-map-marker-alt"></i>
          </h1>
          <h3 style={{ textAlign: "center" }}>Location</h3>
          <p style={{ textAlign: "center" }}>
            Mogbazar
            <br />
            Dhaka, Bangladesh
          </p>
        </div>

        <div
          className="col-lg-4 col-md-6 col-sm-12 "
          style={{
            boxShadow: "10px 10px 20px rgb(223, 223, 223)",
            padding: "20px 20px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
            <i className="fas fa-mobile-alt"></i>
          </h1>
          <h3 style={{ textAlign: "center" }}>Mobile Number</h3>
          <p style={{ textAlign: "center" }}>
            014767623988 <br />
            015727634712
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
