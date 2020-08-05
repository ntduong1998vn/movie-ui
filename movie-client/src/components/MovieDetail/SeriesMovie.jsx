import React, { useEffect, useState, useCookie } from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
// import Accordion from "./Accordion";
// import VideoPlayer from "../Player/VideoJS";
import { getEpisodeByID } from "../../redux/episode/actions";
import { connect } from "react-redux";

import VideoPlayer from "../Player/VideoJS";
var playTime = 0;

function SeriesMovie({ movie, episodes, sources, ...props }) {
  const [labelServer, setLabelServer] = useState([]);
  const [soucreVideo, setSoucreVideo] = useState([]);
  const [activeLabel, setActiveLabel] = useState([]);

  useEffect(() => {
    handleEpisodeClick(1, movie.id)
  }, [movie]);

  useEffect(() => {
    // filter label server
    let filterServerLabel = [];
    if (sources !== undefined) {
      sources.forEach(item => {
        if (!filterServerLabel.includes(item.server)) {
          filterServerLabel.push(item.server)
        }
      });

      setActiveLabel(filterServerLabel[0])
      setLabelServer(filterServerLabel)
      // set up sources episode
      let linkVideo = sources.filter(item => item.server === activeLabel);
      let rs = [];
      let temp = [];

      linkVideo.map(item => rs.push(item));
      if (rs.length > 0) {
        rs.map(i => temp.push({
          src: i.src,
          type: i.label,
          label: i.resolution,
        }))
        // console.log(temp)
      }
      // console.log(rs);
      setSoucreVideo(temp);
    }
  }, [sources])

  function handleEpisodeClick(episodeId, movieId) {
    props.getEpisodeByID(episodeId, movieId);
  }

  useEffect(() => {
    if (sources !== undefined) {
      let linkVideo = sources.filter(item => item.server === activeLabel);
      let rs = [];
      let temp = [];
      linkVideo.map(item => rs.push(item));
      if (rs.length > 0) {
        rs.map(i => temp.push({
          src: i.src,
          type: i.label,
          label: i.resolution,
        }))
        // console.log(temp)
      }
      // console.log(temp);

      setSoucreVideo(
        temp
      );
    }
  }, [activeLabel])

  // read value from cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    // playTime=parseFloat(getCookie("Play time"));
    playTime = parseFloat(localStorage.getItem("playtime"));
    // console.log(playTime)
  }
  useEffect(() => {
    setTimeout(() => { checkCookie() }, 50)
  })

  // console.log(soucreVideo)

  // let src = [
  //   {
  //     src: "http://media.w3.org/2010/05/video/movie_300.webm",
  //     type: "video/webm",
  //     label: "720P",
  //   },
  //   {
  //     src: "http://media.w3.org/2010/05/video/movie_300.webm",
  //     type: "video/webm",
  //     label: "360P",
  //   },
  // ]


  return (
    <section className="section details">
      {/* <!-- details background --> */}
      <div className="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}
      <div className="container">
        <Row>
          <DetailCard single={false} movie={movie} />
          <div className="col-12 ">

            <VideoPlayer src={soucreVideo} />

          </div>
          <div className="col-12">
            <div
              className="details__share"
              style={{ flexDirection: "row", display: "flex" }}
            >
              <span
                className="details__share-title"
                style={{ paddingTop: "35px" }}
              >
                Servers:
              </span>
              {labelServer.length > 0 &&
                labelServer.map((item) => {
                  return (
                    <button
                      type="button"
                      className="form__btn"
                      style={{
                        width: "100px",
                        marginRight: "15px",
                        marginLeft: "15px",
                      }}
                      onClick={() => setActiveLabel(item)}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="col-12">
            <div className="details__wrap">
              {/* <!-- availables --> */}
              <div
                className="details__devices"
                style={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <span
                  className="details__devices-title"
                  style={{ paddingTop: "35px" }}
                >
                  Tập phim:
                </span>

                {episodes.length > 0 &&
                  episodes.map((list) => {
                    return (
                      <button
                        type="button"
                        className="form__btn"
                        style={{
                          width: "50px",
                          marginRight: "15px",
                          marginLeft: "15px",
                        }}
                        onClick={() =>
                          handleEpisodeClick(list.episode_id, list.movie_id)
                        }
                      >
                        {list.episode_id}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
}
const mapStateToProps = ({ episodeData, movieData }) => {

  const { episodes, sources } = episodeData;
  const { movie } = movieData;
  return { sources, episodes, movie };
};
export default connect(
  mapStateToProps,
  {
    getEpisodeByID
  }
)(SeriesMovie);
