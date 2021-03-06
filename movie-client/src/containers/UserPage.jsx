/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import PageTitle from "../components/PageTitle";
import { Tab, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import UserBasicForm from "../components/User/UserBasicForm";
import UserChangePasswordForm from "../components/User/UserChangePasswordForm";
import { connect } from "react-redux";
import UserApi from "../repository/UserAPI";
import { logoutUser } from "../redux/actions";
import { getFavoriteListByUserID } from "../redux/auth/actions"
import favoriteAPI from "../repository/favorite";
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Modal } from 'react-responsive-modal';

function UserPage(props) {
  const [key, setKey] = useState("profile");
  const [message, setMessage] = useState();
  const [showModal, setShowModal] = useState(false);
  const { favorite } = props;
  const columns = [{
    Header: 'Tên Phim',
    accessor: 'movie_name' // String-based value accessors!
  }, {
    Header: 'Current Time',
    accessor: 'current_time',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    Header: '',
    accessor: 'movie_id',
    Cell: props => <button className='form__btn'
      style={{ marginLeft: "100px" }}
      onClick={() => handleRemoveFavorite(props.value)}>Bỏ yêu thích</button>
  }]

  React.useEffect(() => {
    getFavoriteList();
  }, [])
  function handleRemoveFavorite(movieId) {
    console.log(movieId)
    let request = favoriteAPI.removeFavorite(movieId)
    request.then(() => getFavoriteList())

  }

  function onSubmitBasicForm(form) {
    console.log(form);
    UserApi.updateBasicInfo(props.user.id, form)
      .then((res) => {
        setMessage(res.data)
        console.log(res.data)
        setShowModal(true)
      })
      .catch((error) => {
        setMessage(error.response.data)
        setShowModal(true)
        console.log(error.response)
      });
  }

  function onSubmitChangePassword(form) {
    UserApi.changePassword(props.user.id, form)
      .then((res) => {
        setMessage(res.data)
        console.log(res)
        setShowModal(true)
      })
      .catch((error) => {
        setMessage(error.response.data)
        setShowModal(true)
        console.log(error.response)
      });
  }
  function logOut() {
    props.logoutUser();
  }

  function getFavoriteList() {
    props.getFavoriteListByUserID(props.user.id)
  }

  function onCloseModal() {
    setShowModal(false);
  }
  function handleUpdateVip() {
    UserApi.updateVip()
  }
  // console.log(favorite)
  return (
    <Fragment>
      <Modal open={showModal} center onClose={onCloseModal}>
        <h3>Thông báo</h3>
        <p> {message}</p>
        <button
          type="button"
          style={{ marginLeft: '35px' }}
          class="form__btn"
          onClick={() => onCloseModal()}>OK</button>
      </Modal>
      <PageTitle title="Thông tin cá nhân" location="Thông tin cá nhân" />
      <section className="content">
        <Tab.Container
          id="content__tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <div className="profile">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="profile__content">
                    <div className="profile__user">
                      <div className="profile__avatar">
                        <img
                          src={process.env.PUBLIC_URL + "/img/user.svg"}
                          alt="Avatar"
                        />
                      </div>
                      <div className="profile__meta">
                        <h3>{props.user.username}</h3>
                        <span>{`Email: ${props.user.email}`}</span>
                      </div>
                    </div>

                    {/* <!-- content tabs nav --> */}
                    <Nav
                      id="content__tabs"
                      variant="tabs"
                      className="content__tabs content__tabs--profile"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="profile">Profile</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="subscription">
                          Subscription
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="favorite">
                          Favorite
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {/* <!-- end content tabs nav --> */}

                    {/* <!-- content mobile tabs nav --> */}
                    <div
                      className="content__mobile-tabs content__mobile-tabs--profile"
                      id="content__mobile-tabs"
                    >
                      <div
                        className="content__mobile-tabs-btn dropdown-toggle"
                        role="navigation"
                        id="mobile-tabs"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <input type="button" value="Profile" />
                        <span></span>
                      </div>

                      <div
                        className="content__mobile-tabs-menu dropdown-menu"
                        aria-labelledby="mobile-tabs"
                      >
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="1-tab"
                              data-toggle="tab"
                              href="#tab-1"
                              role="tab"
                              aria-controls="tab-1"
                              aria-selected="true"
                            >
                              Profile
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="2-tab"
                              data-toggle="tab"
                              href="#tab-2"
                              role="tab"
                              aria-controls="tab-2"
                              aria-selected="false"
                            >
                              Subscription
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="3-tab"
                              data-toggle="tab"
                              href="#tab-3"
                              role="tab"
                              aria-controls="tab-3"
                              aria-selected="false"
                            >
                              Favorite
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- end content mobile tabs nav --> */}

                    <button
                      className="profile__logout"
                      type="button"
                      onClick={logOut}
                    >
                      <i className="icon ion-ios-log-out"></i>
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            {/* <!-- content tabs --> */}
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <Row>
                  <div className="col-12 col-lg-6">
                    <UserBasicForm
                      user={props.user}
                      onSubmit={onSubmitBasicForm}
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <UserChangePasswordForm onSubmit={onSubmitChangePassword} />
                  </div>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="subscription">
                <Row>
                  {/* <!-- price --> */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile">
                      <div className="price__item price__item--first">
                        <span>Basic</span> <span>Free</span>
                      </div>
                      <div className="price__item">
                        <span>7 days</span>
                      </div>
                      <div className="price__item">
                        <span>720p Resolution</span>
                      </div>
                      <div className="price__item">
                        <span>Limited Availability</span>
                      </div>
                      <div className="price__item">
                        <span>Desktop Only</span>
                      </div>
                      <div className="price__item">
                        <span>Limited Support</span>
                      </div>
                      <button onClick={() => handleUpdateVip()} className="price__btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                  {/* <!-- end price --> */}

                  {/* <!-- price --> */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile price--premium">
                      <div className="price__item price__item--first">
                        <span>Premium</span> <span>$19.99</span>
                      </div>
                      <div className="price__item">
                        <span>1 Month</span>
                      </div>
                      <div className="price__item">
                        <span>Full HD</span>
                      </div>
                      <div className="price__item">
                        <span>Lifetime Availability</span>
                      </div>
                      <div className="price__item">
                        <span>TV & Desktop</span>
                      </div>
                      <div className="price__item">
                        <span>24/7 Support</span>
                      </div>
                      <button onClick={() => handleUpdateVip()} className="price__btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                  {/* <!-- end price --> */}

                  {/* <!-- price --> */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile">
                      <div className="price__item price__item--first">
                        <span>Cinematic</span> <span>$39.99</span>
                      </div>
                      <div className="price__item">
                        <span>2 Months</span>
                      </div>
                      <div className="price__item">
                        <span>Ultra HD</span>
                      </div>
                      <div className="price__item">
                        <span>Lifetime Availability</span>
                      </div>
                      <div className="price__item">
                        <span>Any Device</span>
                      </div>
                      <div className="price__item">
                        <span>24/7 Support</span>
                      </div>
                      <button onClick={() => handleUpdateVip()} className="price__btn">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                  {/* <!-- end price --> */}
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="favorite">
                <Row>
                  <div className="col-12 ">
                    <ReactTable
                      data={favorite}
                      columns={columns}
                      style={{ backgroundColor: '#28282d', color: 'rgba(255, 255, 255, 0.7)' }}
                    />
                  </div>

                </Row>
              </Tab.Pane>

            </Tab.Content>
            {/* <!-- end content tabs --> */}
          </div>
        </Tab.Container>
      </section>
    </Fragment>
  );
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error, favorite } = authUser;
  return { user, loading, error, favorite };
};
export default connect(mapStateToProps, { logoutUser, getFavoriteListByUserID })(UserPage);
