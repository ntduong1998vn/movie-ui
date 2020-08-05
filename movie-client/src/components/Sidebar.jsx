import React from "react";
import SimpleCard from "./SimpleCard";

function SideBar({ data }) {
  return (
    <div className="col-12 col-lg-4 col-xl-4">
      <div className="row">
        {/* <!-- section title --> */}
        <div className="col-12">
          <h2 className="section__title section__title--sidebar">
            Có thể bạn sẽ thích
          </h2>
        </div>
        {/* <!-- end section title --> */}

        {/* <!-- card --> */}
        {data.map((item) => {
          return (
            <div className="col-6 col-sm-4 col-lg-6">
              <SimpleCard key={item.id} movie={item} />;
            </div>
          );
        })}
        {/* <!-- end card --> */}
      </div>
    </div>
  );
}

export default SideBar;
