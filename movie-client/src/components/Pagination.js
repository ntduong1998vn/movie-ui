import React from "react";
// import { Colxx } from "../../components/common/CustomBootstrap";
// import { Nav, NavItem, NavLink } from "reactstrap";

class Pagination extends React.Component {
  componentDidMount() { }
  onChangePage(e) {
    this.props.onChangePage(e);
  }
  render() {
    const {
      totalPage = 0,
      currentPage = 1,
      numberLimit = 5,
    } = this.props;
    // console.log(this.props)
    let startPoint = 1;
    let endPoint = numberLimit;

    if (numberLimit > totalPage) {
      startPoint = 1;
      endPoint = totalPage;
    } else if (currentPage <= parseInt(numberLimit / 2, 10)) {
      startPoint = 1;
      endPoint = numberLimit;
    } else if (currentPage + parseInt(numberLimit / 2, 10) <= totalPage) {
      startPoint = currentPage - parseInt(numberLimit / 2, 10);
      endPoint = currentPage + parseInt(numberLimit / 2, 10);
    } else {
      startPoint = totalPage - (numberLimit - 1);
      endPoint = totalPage;
    }
    startPoint = startPoint === 0 ? 1 : startPoint;
    const points = [];
    for (var i = startPoint; i <= endPoint; i++) {
      points.push(i);
    }
    return (
      <ul class="paginator paginator--list">
        <li class="paginator__item paginator__item--prev">
          <a href="#" onClick={() => this.onChangePage(currentPage - 1)}>
            <i class="icon ion-ios-arrow-back"></i>
          </a>
        </li>
        {points.map(i => {
          return (
            <li
              key={i}
              className={`paginator__item ${currentPage === i && "paginator__item--active"}`}
            >
              <a href="#" onClick={() => this.onChangePage(i)}>{i}</a>
            </li>
          );
        })}

        <li class="paginator__item paginator__item--next">
          <a href="#" onClick={() => this.onChangePage(currentPage + 1)}>
            <i class="icon ion-ios-arrow-forward"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
