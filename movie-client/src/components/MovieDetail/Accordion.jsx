import React, { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";
import $ from "jquery";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
import "malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js";
import "jquery-mousewheel";

function CustomToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      data-toggle="collapse"
      onClick={decoratedOnClick}
      aria-expanded={isCurrentEventKey ? true : false}
    >
      {children}
    </button>
  );
}

function MovieAccordion(props) {
  const [currentKey, setCurrentKey] = useState("0");

  function handleChange(eventKey) {
    // setCurrentKey(eventKey);
  }

  useEffect(() => {
    $(".scrollbar-dropdown").mCustomScrollbar({
      axis: "y",
      scrollbarPosition: "outside",
      theme: "custom-bar",
    });

    $(".accordion").mCustomScrollbar({
      axis: "y",
      scrollbarPosition: "outside",
      theme: "custom-bar2",
    });
  }, []);

  return (
    <div class="col-12 col-xl-6">
      <Accordion id="accordion" defaultActiveKey="0">
        <Card bsPrefix="accordion__card">
          <Card.Header>
            <CustomToggle callback={handleChange} eventKey="0">
              <span>Season: 1</span>
              <span>22 Episodes from Nov, 2004 until May, 2005</span>
            </CustomToggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0" data-parent="#accordion">
            <Card.Body>
              <table class="accordion__list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Air Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Pilot</td>
                    <td>Tuesday, November 16th, 2004</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Paternity</td>
                    <td>Tuesday, November 23rd, 2004</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Occam's Razor</td>
                    <td>Tuesday, November 30th, 2004</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Maternity</td>
                    <td>Tuesday, December 7th, 2004</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Damned If You Do</td>
                    <td>Tuesday, December 14th, 2004</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>The Socratic Method</td>
                    <td>Tuesday, December 21st, 2004</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card bsPrefix="accordion__card">
          <Card.Header>
            <CustomToggle callback={handleChange} eventKey="1">
              <span>Season: 2</span>
              <span>24 Episodes from Sep, 2005 until May, 2006</span>
            </CustomToggle>
          </Card.Header>

          <Accordion.Collapse eventKey="1" data-parent="#accordion">
            <Card.Body>
              <table class="accordion__list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Air Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Pilot</td>
                    <td>Tuesday, November 16th, 2004</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Paternity</td>
                    <td>Tuesday, November 23rd, 2004</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Occam's Razor</td>
                    <td>Tuesday, November 30th, 2004</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Maternity</td>
                    <td>Tuesday, December 7th, 2004</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Damned If You Do</td>
                    <td>Tuesday, December 14th, 2004</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>The Socratic Method</td>
                    <td>Tuesday, December 21st, 2004</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card bsPrefix="accordion__card">
          <Card.Header>
            <CustomToggle callback={handleChange} eventKey="2">
              <span>Season: 3</span>
              <span>24 Episodes from Sep, 2006 until May, 2007</span>
            </CustomToggle>
          </Card.Header>

          <Accordion.Collapse eventKey="2" data-parent="#accordion">
            <Card.Body>
              <table class="accordion__list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Air Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Pilot</td>
                    <td>Tuesday, November 16th, 2004</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Paternity</td>
                    <td>Tuesday, November 23rd, 2004</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Occam's Razor</td>
                    <td>Tuesday, November 30th, 2004</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Maternity</td>
                    <td>Tuesday, December 7th, 2004</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Damned If You Do</td>
                    <td>Tuesday, December 14th, 2004</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>The Socratic Method</td>
                    <td>Tuesday, December 21st, 2004</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card bsPrefix="accordion__card">
          <Card.Header>
            <CustomToggle callback={handleChange} eventKey="3">
              <span>Season: 4</span>
              <span>16 Episodes from Sep, 2007 until May, 2008</span>
            </CustomToggle>
          </Card.Header>

          <Accordion.Collapse eventKey="3" data-parent="#accordion">
            <Card.Body>
              <table class="accordion__list">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Air Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Pilot</td>
                    <td>Tuesday, November 16th, 2004</td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Paternity</td>
                    <td>Tuesday, November 23rd, 2004</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Occam's Razor</td>
                    <td>Tuesday, November 30th, 2004</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Maternity</td>
                    <td>Tuesday, December 7th, 2004</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Damned If You Do</td>
                    <td>Tuesday, December 14th, 2004</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>The Socratic Method</td>
                    <td>Tuesday, December 21st, 2004</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

MovieAccordion.propTypes = {};

export default MovieAccordion;
