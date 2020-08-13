import React from "react";

function PriceCard({ user,id, title, price, ...options }) {
  function handleUpdateVip(){
    // console.log(user)
  }
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="price">
        <div className="price__item price__item--first">
          <span>{title}</span> <span>{price}</span>
        </div>

        {Object.keys(options).map((key, index) => {
          if (key === "support") {
            return (
              <div className="price__item" key={index}>
                <span>
                  {options[key] === true ? "Hỗ trợ 24/7" : "Hỗ trợ giới hạn"}
                </span>
              </div>
            );
          } else {
            return (
              <div className="price__item" key={index}>
                <span>{options[key]}</span>
              </div>
            );
          }
        })}
        <button onClick={() => handleUpdateVip()} className="price__btn">
          Thanh Toán
        </button>
      </div>
    </div>
  );
}
export default PriceCard

