import React, { useEffect, useState } from "react";
import CommentList from "../CommentList";
import Comment from "../Comment";
import SideBar from "../SideBar";
import ReviewList from "../ReviewList";
import { Dropdown, DropdownButton, Nav, Tabs, Tab } from "react-bootstrap";
import cover from "../../img/covers/cover.jpg";

function TabsContainer({ commentList, sideCards }) {
  const [key, setKey] = useState("review");

  useEffect(() => {
    /*==============================
	                  Tabs
  	==============================*/
    document
      .querySelectorAll(".content__mobile-tabs-menu li")
      .forEach((item) => {
        item.setAttribute("data-value", item.textContent.toLowerCase());
      });

    document
      .querySelectorAll(".content__mobile-tabs-menu li")
      .forEach((item) => {
        item.addEventListener("click", (item) => {
          let text = item.textContent;
          let id = item.closest(".content__mobile-tabs").getAttribute("id");
          document
            .querySelector("#" + id)
            .querySelector(".content__mobile-tabs-btn input").value = text;
        });
      });
  }, []);

  return (
    <section className="content">
      <div className="content__head">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- content title --> */}
              <h2 className="content__title">Discover</h2>
              {/* <!-- end content title --> */}

              {/* <!-- content tabs nav --> */}
              <ul
                className="nav nav-tabs content__tabs"
                id="content__tabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    Comments
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tab-2"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-3"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    Photos
                  </a>
                </li>
              </ul>
              {/* <!-- end content tabs nav --> */}

              {/* <!-- content mobile tabs nav --> */}
              <div className="content__mobile-tabs" id="content__mobile-tabs">
                <div
                  className="content__mobile-tabs-btn "
                  role="navigation"
                  id="mobile-tabs"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <input type="button" value="Comments" />
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
                        Comments
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
                        Reviews
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
                        Photos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end content mobile tabs nav --> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-xl-8">
            {/* <!-- content tabs --> */}
            <div className="tab-content" id="myTabContent">
              {/* <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="1-tab"
              >
                <div className="row">
                  <!-- comments -->
                  <div className="col-12">
                    <CommentList>
                      {commentList.map((comment) => {
                        return <Comment {...comment} key={comment.id} />;
                      })}
                    </CommentList>
                  </div>
                  <!-- end comments -->
                </div>
              </div> */}

              <div
                className="tab-pane fade"
                id="tab-2"
                role="tabpanel"
                aria-labelledby="2-tab"
              >
                <div className="row">
                  {/* <!-- reviews --> */}
                  <div className="col-12">
                    <ReviewList />
                  </div>
                  {/* <!-- end reviews --> */}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="tab-3"
                role="tabpanel"
                aria-labelledby="3-tab"
              >
                {/* <!-- project gallery --> */}
                <div className="gallery" itemscope>
                  <div className="row">
                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-1.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-1.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 1
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}

                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-2.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-2.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 2
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}

                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-3.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-3.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 3
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}

                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-4.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-4.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 4
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}

                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-5.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-5.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 5
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}

                    {/* <!-- gallery item --> */}
                    <figure
                      className="col-12 col-sm-6 col-xl-4"
                      itemprop="associatedMedia"
                      itemscope
                    >
                      <a
                        href="img/gallery/project-6.jpg"
                        itemprop="contentUrl"
                        data-size="1920x1280"
                      >
                        <img
                          src="img/gallery/project-6.jpg"
                          itemprop="thumbnail"
                          alt="Image description"
                        />
                      </a>
                      <figcaption itemprop="caption description">
                        Some image caption 6
                      </figcaption>
                    </figure>
                    {/* <!-- end gallery item --> */}
                  </div>
                </div>
                {/* <!-- end project gallery --> */}
              </div>
            </div>
            {/* <!-- end content tabs --> */}
          </div>

          {/* <!-- sidebar --> */}
          <SideBar data={sideCards} />
          {/* <!-- end sidebar --> */}
        </div>
      </div>
    </section>
  );
}

export default TabsContainer;
