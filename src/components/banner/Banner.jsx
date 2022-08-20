import React from "react";

export default function Banner() {
  return (
    <>
      <section
        className="section section--scroll section--spacing-below"
        style={{ marginBottom: "124px" }}
        data-aos-delay={50}
      >
        <div className="page-header__sf">
          <div className="wrapper--1">
            <div
              className="page-header__sf-inner grid__wrapper grid--as-middle grid--offset-1 bg--img bg--blend bg--shadow grid--bdrs"
              style={{
                backgroundImage:
                  'url("https://images.ctfassets.net/03fbs7oah13w/3mB1tAOQ12K2sIVdJvAPoX/cfb197da274dc42670eb09a9cff09627/esg-bg-001.jpg?w=1632&q=80")',
                backgroundColor: "rgba(90,107,113,0.6)",
              }}
            >
              <div className="grid grid--se-2-7 grid--as-middle">
                <div className="page-header__text">
                  <p className="heading--1">Climate Vulnerability Scores</p>
                  <p />
                  <p>
                    A long-term outlook to 2050 that ranks the relative
                    vulnerability of sectors’ and entities’ financial profiles
                    to a realistic stress scenario for climate-related market
                    developments.
                  </p>
                  <p />
                  <div className="button__wrapper">
                    <a
                      className="button button--2"
                      href="https://www.fitchratings.com/research/corporate-finance/fitch-ratings-publishes-climate-vulnerability-scores-for-corporate-sectors-25-04-2022"
                      target="_blank"
                    >
                      View Announcement
                    </a>
                    <a
                      className="button button--2"
                      href="https://www.sustainablefitch.com/insights/inevitable-policy-response-2021-25-04-2022"
                      target="_self"
                    >
                      View Primer
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid--se-9-12 grid--as-middle">
                <div
                  className="bg--blend bg--blur bg--shadow grid--bdrs grid--padding-1"
                  style={{ background: "rgba(94,107,113,0.3)" }}
                >
                  <div className="grid__content">
                    <div className="embedded-form">
                      <div className="form-form">
                        <h3
                          className="heading--5"
                          style={{
                            color: "var(--inverted-text-color)",
                            fontWeight: 300,
                          }}
                        >
                          <span>
                            <b>Sign up</b>
                          </span>
                          <span>
                            for product updates and our monthly newsletter{" "}
                          </span>
                        </h3>
                        <form
                          id="mktoForm_4339"
                          noValidate="novalidate"
                          className="mktoForm mktoLayoutLeft"
                          data-once="form-updated"
                          data-drupal-form-fields="FirstName,LastName,Email,Company,Country,Has_Accepted_Privacy_Policy_Terms__c"
                        ></form>
                      </div>
                      <div className="form-thankyou">
                        <p>
                          {" "}
                          Thank you for your request. One of our specialists
                          will be in touch shortly.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
