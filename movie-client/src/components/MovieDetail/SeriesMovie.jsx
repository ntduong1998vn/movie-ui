import React, { useEffect, useState } from "react";
// import PlyrPlayer from "../../PlyrPlayer";
import { Row } from "react-bootstrap";
import DetailCard from "../DetailCard";
// import Accordion from "./Accordion";
// import VideoPlayer from "../Player/VideoJS";
import { getEpisodeByID } from "../../redux/episode/actions";
import { connect } from "react-redux";

import favoriteAPI from "../../repository/favorite";

import VideoPlayer from "../Player/VideoJS";
import '../../assets/css/button.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

var playTime = 0;

function SeriesMovie({ movie, episodes, sources, user, ...props }) {
  const [labelServer, setLabelServer] = useState([]);
  const [soucreVideo, setSoucreVideo] = useState([]);
  const [activeLabel, setActiveLabel] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [liked, setLiked] = useState(false);
  const [lastTime, setLastTime] = useState(0);
  const [favorite, setFavorite] = useState({});

  useEffect(() => {
    handleEpisodeClick(1, movie.id)
  }, [movie]);

  useEffect(() => {
    onOpenModal()
  }, [favorite])

  useEffect(() => {
    if (movie.id !== undefined && movie.id !== 0) {
      favoriteAPI.checkExistsFavorite(movie.id).then(result => {
        if (result.data.success === "OK") {
          setFavorite(result.data.result)
        }
      })
    }
  }, [movie])

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
    // console.log(favorite)
    if (favorite.id !== undefined) {
      setLiked(true);
    }
    else {
      setLiked(false);

    }

  }, [favorite])

  useEffect(() => {
    let currentTime = 0
    // console.log(favorite)
    let temp = setInterval(() => {
      currentTime = parseInt(localStorage.getItem('playtime'));
      // console.log(currentTime)
      if (liked === true) {
        let favoriteForm = {
          current_time: currentTime,
          movie_id: movie.id,
          movie_name: movie.title,
          user_id: user.id
        }
        console.log(favoriteForm)
        favoriteAPI.updateCurrentTime(favoriteForm)
      }
    }, 1000)
     if (liked === false) {
      console.log('check')
      clearInterval(temp)
    }
    return () => {
      clearInterval(temp)
    }
  },[liked])

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
    playTime = parseFloat(getCookie("Play time"));
    return playTime
    // setCurrentTime(playTime);
    // playTime = parseFloat(localStorage.getItem("playtime"));

    // console.log(playTime)
  }
  // useEffect(() => {
  //   setInterval(() => { checkCookie() }, 5000)
  // })

  function onCloseModal() {
    setShowModal(false)
  }
  function getCurrentTime() {
    setLastTime(favorite.current_time)
    onCloseModal();
  }

  function onOpenModal() {
    if (favorite.current_time !== 0 && favorite.current_time !== undefined) {
      setShowModal(true);
    }
  }
  // console.log(showModal)
  function changeStatusLike() {
    let currentTime = parseInt(localStorage.getItem('playtime'));
    if (liked === false) {
      let favoriteForm = {
        current_time: currentTime,
        movie_id: movie.id,
        movie_name: movie.title,
        user_id: user.id
      }
      favoriteAPI.addFavorite(favoriteForm)
    }
    else {
      favoriteAPI.removeFavorite(movie.id)
    }
    setLiked(!liked)
  }
  // localStorage.setItem("liked", liked)
  return (
    <section className="section details">
      {/* <!-- details background --> */}
      {showModal === false ? (
        null
      ) : (
          <Modal open={showModal} center onClose={onCloseModal}>
            <h3>Thông báo</h3>
            <p>Bạn đã xem phim tại {favorite.current_time}s</p>
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

            <VideoPlayer src={soucreVideo} lastTime={lastTime} />

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
const mapStateToProps = ({ episodeData, movieData, authUser }) => {

  const { episodes, sources } = episodeData;
  const { movie } = movieData;
  const { user } = authUser;
  return { sources, episodes, movie, user };
};
export default connect(
  mapStateToProps,
  {
    getEpisodeByID
  }
)(SeriesMovie);
