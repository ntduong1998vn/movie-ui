import React from "react";
import data from "./data";
import Feature from "./Feature";

export default function Features() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="row">
          {/* <!-- section title --> */}
          <div className="col-12">
            <h2 className="section__title section__title--no-margin">
              Các tính năng của chúng tôi
            </h2>
          </div>
          {/* <!-- end section title --> */}

          {/* <!-- feature --> */}
          {data.map((item) => {
            return (
              <Feature
                key={item.id}
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            );
          })}
          {/* <!-- end feature --> */}

        </div>
      </div>
    </section>
  );
}
