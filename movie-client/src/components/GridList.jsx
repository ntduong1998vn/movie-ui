import React from "react";
import SimpleCard from "./SimpleCard";

export default function GridList({ movieList }) {
  return (
    <div className="row">
      {movieList.map((movie) => {
        return (
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2" key={movie.id}>
            <SimpleCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}
