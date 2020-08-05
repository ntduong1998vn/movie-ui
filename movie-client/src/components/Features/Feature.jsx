import React from "react";

function Feature({ title, content, icon }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="feature">
        <i
          className={`icon ${
            icon != null ? icon : "ion-ios-appstore"
          } feature__icon`}
        ></i>
        <h3 className="feature__title">{title}</h3>
        <p className="feature__text">{content}</p>
      </div>
    </div>
  );
}

export default Feature;
