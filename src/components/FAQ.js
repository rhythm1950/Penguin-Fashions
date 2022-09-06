import React from "react";

const FAQ = () => {
  return (
    <section className="container mt-5" id="about-us">
      <h1 className="mb-4">Frequestly Asked Questions</h1>

      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <img src="./Image/Logo, Icon/freepik.png" alt="shop" />
        </div>

        <div className="col-lg-6 col-md-12 ">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What's your refund policy?
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus qui temporibus deserunt, illo inventore sed, labore
                  culpa odio eaque cumque architecto reprehenderit harum soluta
                  reiciendis deleniti iure assumenda fugit impedit.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What's your payment system?
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, excepturi, consectetur dolorum delectus qui omnis iste
                  cumque, dolore maiores rerum velit aliquam praesentium alias?
                  Accusamus nisi dignissimos animi sequi! Repellat.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  When are you open?
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Mollitia vel, ducimus aliquid ex dicta praesentium quod sed ab
                  hic. Ipsum, aliquid. Veritatis assumenda dolor rem
                  perspiciatis voluptatem distinctio exercitationem aliquid?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
