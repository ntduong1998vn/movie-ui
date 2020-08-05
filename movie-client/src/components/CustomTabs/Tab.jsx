import React, { useState } from "react";
import { Tab, Nav, Row, Col, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

CustomTabs.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.instanceOf(Array).isRequired,
};

function CustomTabs({ activeTab, children, ...props }) {
  const [key, setKey] = useState(activeTab);

  function onClickTabItem(tab) {
    setKey(tab);
  }

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
                <h2 className="content__title">Phim Mới</h2>

                <Nav varian="tabs" className="content__tabs">
                  {children.map((child, index) => {
                    const { label } = child.props;
                    return (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={label}>{label}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>

                {/* <!-- content mobile tabs nav --> */}
                <Dropdown
                  className="content__mobile-tabs"
                  id="content__mobile-tabs"
                >
                  <Dropdown.Toggle
                    className="content__mobile-tabs-btn"
                    role="navigation"
                    id="mobile-tabs"
                  >
                    <input type="button" value="New items" />
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="content__mobile-tabs-menu dropdown-menu"
                    aria-labelledby="mobile-tabs"
                  >
                    <Nav variant="tabs" as="ul">
                      {children.map((child, index) => {
                        const { label } = child.props;
                        return (
                          <Nav.Item as="li" key={index}>
                            <Nav.Link eventKey={label}>{label}</Nav.Link>
                          </Nav.Item>
                        );
                      })}
                    </Nav>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end content mobile tabs nav --> */}
              </Col>
            </Row>
          </div>
        </div>

        <div className="container">
          {/* <!-- content tabs --> */}
          <Tab.Content>
            {children.map((child, index) => {
              const { label } = child.props;
              return (
                <Tab.Pane eventKey={label} key={index}>
                  {child.props.children}
                </Tab.Pane>
              );
            })}
          </Tab.Content>
          {/* <!-- end content tabs --> */}
        </div>
      </Tab.Container>
    </section>
  );
}

CustomTabs.propTypes = {};

export default CustomTabs;
