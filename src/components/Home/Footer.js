import React from "react";

function Footer() {
  return (
    <div className="footer p-2 mb-3">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h4 className="text-brand">
              Let's handle your <br/> projects,professionally
            </h4>
            <p style={{ lineHeight: "2rem" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              placeat saepe itaque ad dolores quo corrupti vitae id, incidunt
              beatae obcaecati quisquam a perspiciatis illum?
            </p>
          </div>
          <div className="col-md-6">
            <form>
              <div class="form-group">
           
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
               
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Your Name/company's Name"
                />
              </div>

              <div class="form-group">
                
                <textarea
                  class="form-control"
                  id="your Message"
                  rows="6"
                ></textarea>
              </div>
              <button className="btn btn-dark pl-3" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
  <p className="text-center mt-2">Copyright Orange Lab {(new Date()).getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
