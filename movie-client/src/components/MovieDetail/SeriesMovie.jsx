import React, { useEffect, useState } from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
// import Accordion from "./Accordion";
// import VideoPlayer from "../Player/VideoJS";
import { getEpisodeByID } from "../../redux/episode/actions";
import { connect } from "react-redux";

import VideoPlayer from "../Player/VideoJS";
import '../../assets/css/button.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

var playTime = 0;

function SeriesMovie({ movie, episodes, sources, ...props }) {
  const [labelServer, setLabelServer] = useState([]);
  const [soucreVideo, setSoucreVideo] = useState([]);
  const [activeLabel, setActiveLabel] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [liked, setLiked] = useState(false);

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
  // useEffect(() => {
  //   setTimeout(() => { checkCookie() }, 50)
  // })\

  function onCloseModal() {
    setShowModal(false)
  }
  function getCurrentTime() {
    console.log("Có xem");
    onCloseModal();
  }

  function onOpenModal() {
    //Condition for open Modal

    setShowModal(true)
  }
  // console.log(showModal)
  function changeStatusLike() {
    setLiked(!liked)
  }
  console.log(liked)
  return (
    <section className="section details">
      {/* <!-- details background --> */}
      {showModal === false ? (
        null
      ) : (
          <Modal open={showModal} center onClose={onCloseModal}>
            <h3>Thông báo</h3>
            <p>Bạn đã xem phim tại</p>
            <p> Bạn có muốn tiếp tục xem không?</p>
            <button type="button" class="button1" onClick={() => getCurrentTime()}>Có</button>
            <button type="button" class="button2" onClick={() => onCloseModal()}>Không</button>
          </Modal>
        )
      }
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
          <div className="col-12">
            <div
              className="details__share"
              style={{ flexDirection: "row", display: "flex" }}
            >
              <span
                className="details__share-title"
                style={{ paddingTop: "35px" }}
              >
                Yêu thích bộ phim:
              </span>
              {liked === false ? (
                <button
                  type="button"
                  className="form__btn"
                  style={{
                    width: "150px",
                    marginRight: "15px",
                    marginLeft: "15px",
                  }}
                  onClick={() => changeStatusLike()}>
                  Yêu thích
                </button>
              ) : (
                  <button type="button"
                    className="form__btn"
                    style={{
                      width: "150px",
                      marginRight: "15px",
                      marginLeft: "15px",
                    }}
                    onClick={() => changeStatusLike()}>
                    Bỏ yêu thích
                  </button>
                )
              }
            </div>
          </div>
        </Row>

      </div>
    </section >
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
