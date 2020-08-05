import React, { useEffect, useState } from "react";
import SideBar from "../Sidebar";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import ReviewListTest from "./ReviewList";
import CommentListTest from "./CommentList";
import Gallery from "./Gallery";

function TabsContainer({ commentList, sideCards }) {
  const [key, setKey] = useState("comments");

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
      <Tab.Container
        id="content__tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <div className="content__head">
          <div className="container">
            <Row>
              <Col xs={12}>
                {/* <!-- content title --> */}
                <h2 className="content__title">Discover</h2>
                {/* <!-- end content title --> */}

                {/* <!-- content tabs nav --> */}
                <Nav variant="tabs" className="content__tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="comments">Comments</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="reviews">Reviews</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="photos">Photos</Nav.Link>
                  </Nav.Item>
                </Nav>

                {/* <!-- end content tabs nav --> */}
              </Col>
            </Row>
          </div>
        </div>

        <div className="container">
          <Row>
            <Col xs={12} lg={8} xl={8}>
              {/* <!-- content tabs --> */}
              <Tab.Content>
                <Tab.Pane eventKey="comments">
                  <CommentListTest commentList={commentList} />
                </Tab.Pane>

                <Tab.Pane eventKey="reviews">
                  <ReviewListTest />
                </Tab.Pane>

                <Tab.Pane eventKey="photos">
                  <Gallery />
                </Tab.Pane>
              </Tab.Content>
              {/* <!-- end content tabs --> */}
            </Col>

            {/* <!-- sidebar --> */}
            <SideBar data={sideCards} />
            {/* <!-- end sidebar --> */}
          </Row>
        </div>
      </Tab.Container>
    </section>
  );
}

export default TabsContainer;
