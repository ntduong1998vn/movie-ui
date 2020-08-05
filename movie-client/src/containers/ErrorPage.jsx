import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/img/section/section.jpg";

function ErrorPage() {
  useEffect(() => {
    /*==============================
            Section bg
    ==============================*/
    document
      .querySelectorAll(".section--bg, .details__bg")
      .forEach(function (item) {
        if (item.hasAttribute("data-bg")) {
          console.log(item.attributes);
          item.style.background = "url(" + item.getAttribute("data-bg") + ")";
          item.style.backgroundPosition = "center center";
          item.style.backgroundRepeat = "no-repeat";
          item.style.backgroundSize = "cover";
        }
      });
  }, []);

  return (
    <React.Fragment>
      <div className="page-404 section--bg" data-bg={bgImg}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-404__wrap">
                <div className="page-404__content">
                  <h1 className="page-404__title">404</h1>
                  <p className="page-404__text">
                    The page you are looking for not available!
                  </p>
                  <Link to="/" className="page-404__btn">
                    go back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ErrorPage;
