import React from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import DetailCard from "../DetailCard";
import { Col, Row } from "react-bootstrap";
// import Plyr from 'react-plyr';
import VideoPlayer from "../Player/VideoJS";

function SingleMovie({ movie }) {
  // console.log(movie.sources);
  let rs=[]
  movie.sources.map(item=>{
    rs.push({type: "video/mp4",
        src:item.src
      })
})
  //  console.log(rs);
  return (
    <section class="section details">
      {/* <!-- details background --> */}
      <div class="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}

      {/* <!-- details content --> */}
      <div class="container">
        <Row>
          <DetailCard single={true} movie={movie} />

          {/* <!-- player --> */}
          <Col xs={12} xl={6}>
            <VideoPlayer src={rs}/> 
            {/* <VideoPlayer src="https://www.googleapis.com/drive/v3/files/1N4Y4zfOHH_Et7Z1swNz_Rz2LzsUiLmNV?alt=media&key=AIzaSyDfmnew541jCJhtv10z4R6pKDg1CdkMXOA"/>  */}
          </Col>
          {/* <!-- end player --> */}

          <Col xs={12}>
            <div class="details__wrap">
              {/* <!-- availables --> */}
              <div class="details__devices"></div>
              {/* <!-- end availables --> */}

              {/* <!-- share --> */}
              <div class="details__share">
                <span class="details__share-title">Share with friends:</span>

                <ul class="details__share-list">
                  <li class="facebook">
                    <a href="#">
                      <i class="icon ion-logo-facebook"></i>
                    </a>
                  </li>
                  <li class="instagram">
                    <a href="#">
                      <i class="icon ion-logo-instagram"></i>
                    </a>
                  </li>
                  <li class="twitter">
                    <a href="#">
                      <i class="icon ion-logo-twitter"></i>
                    </a>
                  </li>
                  <li class="vk">
                    <a href="#">
                      <i class="icon ion-logo-vk"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- end share --> */}
            </div>
          </Col>
        </Row>
      </div>
      {/* <!-- end details content --> */}
    </section>
  );
}

export default SingleMovie;
