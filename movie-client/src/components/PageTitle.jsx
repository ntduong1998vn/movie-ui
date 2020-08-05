import React, { useEffect } from "react";
import bgImg from "../assets/img/section/section.jpg";

export default function PageTitle({ title, location }) {
  useEffect(() => {
    /*==============================
                Section bg
    ==============================*/

    document.querySelectorAll(".section--bg").forEach(function (item) {
      if (item.hasAttribute("data-bg")) {
        item.style.background = "url(" + item.getAttribute("data-bg") + ")";
        item.style.backgroundPosition = "center center";
        item.style.backgroundRepeat = "no-repeat";
        item.style.backgroundSize = "cover";
      }
    });
  }, []);

  return (
    <section className="section section--first section--bg" data-bg={bgImg}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__wrap">
              {/* <!-- section title --> */}
              <h2 className="section__title">{title}</h2>
              {/* <!-- end section title --> */}

              {/* <!-- breadcrumb --> */}
              <ul className="breadcrumb">
                <li className="breadcrumb__item">
                  <a href="/">Trang chủ</a>
                </li>
                <li className="breadcrumb__item breadcrumb__item--active">
                  {location}
                </li>
              </ul>
              {/* <!-- end breadcrumb --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
